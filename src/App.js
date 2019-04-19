import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store';

import './App.scss';
import MainContainer from './containers/MainContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          {/* <MainContainer /> */}
          <Route path="/:category" component={MainContainer} />
          <Route exact path="/" component={MainContainer} />
        </Router>
      </Provider>
    );
  }
}

export default App;
