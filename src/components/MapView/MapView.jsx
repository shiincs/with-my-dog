/* global naver */
/* global daum */

import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './MapView.scss';
import * as api from '../../api';

const cx = classNames.bind(styles);

export default class MapView extends Component {
  componentDidMount() {
    this.handleMap();
  }

  handleMap() {
    const el = document.getElementById('mapEl');

    /* daum map create */
    let mapOptions = {
      center: new daum.maps.LatLng(37.552617, 126.904614),
      level: 3,
    };
    let daumMap = new daum.maps.Map(el, mapOptions);

    this.drawMarker('all', daumMap);
  }

  drawMarker(category, map) {
    const data = api.fetchList(category);

    for (let i = 0; i < data.length; i++) {
      let marker = new daum.maps.Marker({
        map, // 마커를 표시할 지도
        position: new daum.maps.LatLng(data[i].latitude, data[i].longitude), // 마커를 표시할 위치
        title: data[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      });
    }
  }

  render() {
    return <div id="mapEl" className={cx('mapEl')} />;
  }
}
