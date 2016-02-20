import React from 'react';
import GoogleMapLoader from 'react-google-maps/lib/GoogleMapLoader';
import GoogleMap from 'react-google-maps/lib/GoogleMap';
import Marker from 'react-google-maps/lib/Marker';
import SearchBox from 'react-google-maps/lib/SearchBox';

const inputStyle = {
    'border': '1px solid transparent',
    'borderRadius': '1px',
    'boxShadow': '0 2px 6px rgba(0, 0, 0, 0.3)',
    'boxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'fontSize': '14px',
    'height': '32px',
    'marginTop': '27px',
    'outline': 'none',
    'padding': '0 12px',
    'textOverflow': 'ellipses',
    'width': '400px'
};

function MapView(){
    return (
        <section style={{height: '100%'}}>
            <GoogleMapLoader
                containerElement={
            <div
                style={{
                /*we set these values to the max possible*/
                    width:window.innerWidth,
                    height:window.innerHeight,
                    position: 'absolute'
                }}
            >
            </div>
            }
                googleMapElement={
            <GoogleMap
                ref='map'
                options={{
                /*these are options that affect the controls shown in the map*/
                    streetViewControl:false,
                    mapTypeControl:false,
                    zoomControl: true,
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_TOP
                    }
                }}
                defaultZoom={16}
                defaultCenter={this.state.center}
                center={this.state.center}
                onBoundsChanged={()=>this.handleBoundsChanged()}
            >
                {/* we add a search box */}
                <SearchBox
                  bounds={this.state.bounds}
                  controlPosition={google.maps.ControlPosition.TOP_CENTER}
                  onPlacesChanged={()=>this.handlePlacesChanged()}
                  ref='searchBox'
                  placeholder='Find restaurants nearby'
                  style={inputStyle}
                   />

                {this.props.restaurantList.map((marker, index) => (
                  <Marker position={marker.position} key={index} />
                ))}
            </GoogleMap>
            }
            />
        </section>
    );
}

export default MapView;