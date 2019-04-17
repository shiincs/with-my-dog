import React, { Component } from 'react';
import { connect } from 'react-redux';

import MapView from '../components/MapView/MapView';
import {
  getVisibleList,
  getIsFetching,
  getErrorMessage,
  fetchList,
} from '../ducks/list';

class MapContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.fetchData();
    }
  }

  fetchData() {
    const { category, fetchList } = this.props;
    console.log(category);
    fetchList(category).then(() => console.log('map done!'));
  }

  render() {
    const { list, isFetching, errorMessage } = this.props;
    console.log(list);
    return <MapView list={list} />;
  }
}

const mapStateToProps = state => {
  const category = 'all';
  return {
    list: getVisibleList(state, category),
    isFetching: getIsFetching(state, category),
    category,
    errorMessage: getErrorMessage(state, category),
  };
};

MapContainer = connect(
  mapStateToProps,
  { fetchList }
)(MapContainer);

export default MapContainer;
