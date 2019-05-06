import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store';

import './App.scss';
import MainContainer from './containers/MainContainer';

import { MapProvider } from './contexts/MapContext';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MapProvider>
          <Router>
            {/* <MainContainer /> */}
            <Route path="/:category" component={MainContainer} />
            <Route exact path="/" component={MainContainer} />
          </Router>
        </MapProvider>
      </Provider>
    );
  }
}

export default App;
