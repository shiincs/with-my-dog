/* global daum */
import React, { Component } from 'react';

import AddPlaceView from '../components/AddPlaceView/AddPlaceView';

export default class AddPlaceContainer extends Component {
  render() {
    const { isPlaceSearchOpen, handlePlaceSearchMenu } = this.props;
    return (
      <AddPlaceView
        isPlaceSearchOpen={isPlaceSearchOpen}
        handlePlaceSearchMenu={handlePlaceSearchMenu}
      />
    );
  }
}
