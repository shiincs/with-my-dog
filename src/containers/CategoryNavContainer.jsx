import React, { Component } from 'react';
import CategoryNavView from '../components/CategoryNavView/CategoryNavView';

export default class CategoryNavContainer extends Component {
  render() {
    return <CategoryNavView {...this.props} />;
  }
}
