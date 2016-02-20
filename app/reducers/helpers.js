import AppConstants from '../constants/constants';

//a variety of helpers to properly sort and filter things out

export function getList(list, center, filter, sorter){
  return useFilter(useSorter(list, center, sorter), filter);
}
export function useFilter(list, filter){
  switch(filter){
    case AppConstants.filters[0]:
      return list.filter((item, i) => (i<10) );
    default:
      return list;
  }
}
export function useSorter(list, center, sorter){
  switch(sorter){
    case AppConstants.sorters[0]:
      //make sure that we DO NOT mutate the original list
      //we simply use the google API to calculate distances between the center and each point
      return list.concat().sort((p1,p2) => Math.abs(getDistance(center,p1.position))>Math.abs(getDistance(center,p2.position)));
    default:
      return list;
  }
}
//it would be very important to further investigate this function
//for short distances between points, it probably makes more sense to compare them directly
export function getDistance(p1,p2){
  return google.maps.geometry.spherical.computeDistanceBetween(p1,p2);
}
