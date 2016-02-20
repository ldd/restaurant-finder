import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import restaurantStore from './app/reducers/store';
import MainContainer from './app/components/Main/MainContainer';

import injectTapEventPlugin from 'react-tap-event-plugin';
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

let store = createStore(restaurantStore);
render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('app')
);