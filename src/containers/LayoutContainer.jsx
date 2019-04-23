import React, { Component } from 'react';
import LayoutView from '../components/LayoutView/LayoutView';

export default class LayoutContainer extends Component {
  state = {
    isNavMenuOpen: false,
    isPlaceSearchOpen: false,
  };

  handleNavMenu() {
    this.setState(prev => ({
      isNavMenuOpen: !prev.isNavMenuOpen,
    }));
  }

  handlePlaceSearchMenu() {
    this.setState(prev => ({
      isPlaceSearchOpen: !prev.isPlaceSearchOpen,
    }));
  }

  render() {
    const { children } = this.props;
    const { isNavMenuOpen, isPlaceSearchOpen } = this.state;

    return (
      <>
        <LayoutView
          isNavMenuOpen={isNavMenuOpen}
          handleNavMenu={() => this.handleNavMenu()}
          isPlaceSearchOpen={isPlaceSearchOpen}
          handlePlaceSearchMenu={() => this.handlePlaceSearchMenu()}
        />
        {children}
      </>
    );
  }
}
