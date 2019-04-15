/* global naver */
import React, { Component } from 'react';

import './App.scss';
import ListContainer from './containers/ListContainer';
import MapContainer from './containers/MapContainer';

class App extends Component {
  render() {
    return (
      <>
        <ListContainer />
        {/* <MapContainer /> */}
      </>
    );
  }
}

export default App;
