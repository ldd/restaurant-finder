import {getList} from './helpers';
import AppConstants from '../constants/constants';

let restaurantStore = function(state = {}, action){
  state.restaurantList = state.restaurantList || [];
  state.center = state.center || new google.maps.LatLng(45.50492, -73.57616);
  state.sorter = state.sorter || AppConstants.sorters[0];
  state.filter = state.filter || AppConstants.filters[0];
  switch(action.type){
    case 'TOGGLE_RESTAURANT_LIST':
      return{
        isListVisible: action.isListVisible,
        restaurantList: state.restaurantList,
        center: state.center,
        filter: state.filter,
        sorter: state.sorter
      };
    case 'SET_RESTAURANT_LIST':
      return{
        isListVisible: true,
        restaurantList: getList(action.restaurantList, state.center, state.filter, state.sorter),
        center: state.center,
        filter: state.filter,
        sorter: state.sorter
      };
    case 'SET_CENTER':
      return{
        isListVisible: state.isListVisible,
        restaurantList: state.restaurantList,
        center: action.center,
        filter: state.filter,
        sorter: state.sorter
      };
    case 'CHANGE_FILTER':
      return{
        isListVisible: true,
        restaurantList: state.restaurantList,
        center: state.center,
        filter: action.filter,
        sorter: state.sorter
      };
    case 'CHANGE_SORTER':
      return{
        isListVisible: true,
        restaurantList: state.restaurantList,
        center: state.center,
        filter: state.filter,
        sorter: action.sorter
      };
    default:
      return state;
  }
};
export default restaurantStore;