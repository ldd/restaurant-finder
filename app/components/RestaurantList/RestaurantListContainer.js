import { connect } from 'react-redux';
import RestaurantList from './RestaurantList';


const mapStateToProps = (state) => {
    return {
        restaurantList: state.restaurantList
    };
};

const RestaurantListContainer = connect(
  mapStateToProps
)(RestaurantList);

export default RestaurantListContainer;