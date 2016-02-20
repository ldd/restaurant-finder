import React from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {setRestaurantList, setCenter} from '../../actions/actions';
import MapView from './MapView';

class MapViewContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            bounds: null,
            center: {
                lat: 45.50492,
                lng: -73.57616
            },
            markers: []
        };
    }
    handleBoundsChanged(){
        this.setState({
            bounds: this.refs.map.getBounds(),
            center: this.refs.map.getCenter()
        })
    }
    handlePlacesChanged () {
        const places = this.refs.searchBox.getPlaces();
        const markers = [];
        //
        //// Add a marker for each place returned from search bar
        places.forEach(function (place) {
            markers.push({
                position: place.geometry.location
            });
        });

        // Set markers; set map center to first search result
        const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;
        this.setState({
            center: mapCenter
        });
        this.props.setCenter(mapCenter);
        this.getNearbyRestaurants();
    }
    getNearbyRestaurants(){
        let mapNode = findDOMNode(this.refs.map);
        let service = new google.maps.places.PlacesService(mapNode);
        let request = {
            location: this.state.center,
            radius: '500',
            type: ['restaurant']
        };
        const markers = [];
        const restaurants = [];
        service.nearbySearch(request, (results, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    // If the request succeeds, draw the place location on
                    // the map as a marker, and register an event to handle a
                    // click on the marker.
                    markers.push({
                        position: place.geometry.location
                    });
                    restaurants.push({
                        name: place.name,
                        position: place.geometry.location,
                        vicinity: place.vicinity
                    })
                }
                this.setState({
                    markers: markers
                });
                this.props.setRestaurantList(restaurants);
            }
        });
    }
    render(){
        return MapView.call(this, this.props, this.state);
    }
}
const mapStateToProps = (state) => {
    return {
        restaurantList: state.restaurantList
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setRestaurantList: (restaurantList) => dispatch(setRestaurantList(restaurantList)),
        setCenter: (center) => dispatch(setCenter(center))
    }
};

MapViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapViewContainer);

export default MapViewContainer;