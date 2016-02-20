export const toggleRestaurantList = (isListVisible) => {
  return{
    type: 'TOGGLE_RESTAURANT_LIST',
    isListVisible
  }
};
export const setRestaurantList = (restaurantList) => {
  return{
    type: 'SET_RESTAURANT_LIST', restaurantList
  }
};
export const setCenter = (center) => {
  return{
    type: 'SET_CENTER', center
  }
};
export const changeFilter = (filter) => {
  return{
    type: 'CHANGE_FILTER', filter
  }
};
export const changeSorter = (sorter) => {
  return{
    type: 'CHANGE_SORTER',sorter
  }
};
