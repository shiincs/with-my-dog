import React, { Component } from 'react';
import LayoutView from '../components/LayoutView/LayoutView';

export default class LayoutContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <LayoutView />
        {children}
      </>
    );
  }
}
