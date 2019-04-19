import React, { Component } from 'react';
import LayoutView from '../components/LayoutView/LayoutView';

export default class LayoutContainer extends Component {
  state = {
    isNavMenuOpen: false,
  };

  handleNavMenu() {
    this.setState(prev => ({
      isNavMenuOpen: !prev.isNavMenuOpen,
    }));
  }

  render() {
    const { children } = this.props;
    const { isNavMenuOpen } = this.state;

    return (
      <>
        <LayoutView
          isNavMenuOpen={isNavMenuOpen}
          handleNavMenu={() => this.handleNavMenu()}
        />
        {children}
      </>
    );
  }
}
