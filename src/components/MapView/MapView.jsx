import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import _ from 'lodash';

import { withMap } from '../../contexts/MapContext';

import styles from './MapView.scss';

const cx = classNames.bind(styles);

class MapView extends PureComponent {
  state = {
    onMarker: false,
  };

  componentDidMount() {
    const { handleMap, list } = this.props;
    try {
      handleMap(list);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps) {
    const { handleMap, list } = this.props;

    if (!_.isEqual(this.props.list, prevProps.list)) {
      try {
        handleMap(list);
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {
    return <div id="mapEl" className={cx('mapEl')} />;
  }
}

export default withMap(MapView);
