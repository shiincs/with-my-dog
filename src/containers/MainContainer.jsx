import React, { Component } from 'react';

import MainView from '../components/MainView/MainView';

export default class MainContainer extends Component {
  state = {
    isListOpen: false,
  };

  handleMapListToggle() {
    this.setState(prev => ({
      isListOpen: !prev.isListOpen,
    }));
  }

  render() {
    return (
      <MainView
        isListOpen={this.state.isListOpen}
        handleMapListToggle={() => this.handleMapListToggle()}
      />
    );
  }
}
