import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const RestaurantList = ({restaurantList}) => {
    return (
        <List>
            {/*add restaurant items*/}
            {restaurantList.map((restaurant, i) =>
                <ListItem
                    primaryText={restaurant.name}
                    secondaryText={restaurant.vicinity}
                    key={i}
                />)}
        </List>
    )
};
export default RestaurantList;