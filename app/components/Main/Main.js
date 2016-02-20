import React from 'react';

import NavigationBar from './../NavigationBar/NavigationBarController';
import MapViewContainer from './../MapView/MapViewContainer';

const Main = ({isListVisible}) => {
    return(
        <div>
            <NavigationBar
                open={isListVisible}
            />

            {/*add the actual map*/}
          <MapViewContainer/>
        </div>
    )
};
export default Main;