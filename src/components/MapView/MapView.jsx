/* global daum */

import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './MapView.scss';

const cx = classNames.bind(styles);

export default class MapView extends Component {
  state = {
    onMarker: false,
  };

  componentDidMount() {
    this.handleMap();
  }

  componentDidUpdate(prevProps) {
    if (this.props.list !== prevProps.list) {
      this.handleMap();
    }
  }

  handleMap() {
    const el = document.getElementById('mapEl');

    /* daum map create */
    let mapOptions = {
      center: new daum.maps.LatLng(37.552617, 126.904614),
      level: 3,
      zIndex: 100,
    };
    let daumMap = new daum.maps.Map(el, mapOptions);

    const { list } = this.props;
    this.drawMarker(daumMap, list);
  }

  handleMarker() {
    this.setState(prevProps => ({ onMarker: !prevProps }));
  }

  drawMarker(map, list) {
    for (let i = 0; i < list.length; i++) {
      let marker = new daum.maps.Marker({
        map, // 마커를 표시할 지도
        position: new daum.maps.LatLng(list[i].latitude, list[i].longitude), // 마커를 표시할 위치
        title: list[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      });

      let content = `
        <div class="infoOverlay">
          <figure>
            <figcaption>
              <dt>${list[i].title}</dt>
              <dl>주소</dl>
            </figcaption>
          </figure>
        </div>
      `;

      let overlay = new daum.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition(),
        zIndex: 300,
      });

      overlay.setMap(null);

      const handleMarker = () => {
        this.setState(prev => ({ onMarker: !prev.onMarker }));
      };

      const bindThis = this;

      daum.maps.event.addListener(marker, 'click', function() {
        if (!bindThis.state.onMarker) {
          overlay.setMap(map);
        } else {
          overlay.setMap(null);
        }
        handleMarker();
      });
    }
  }

  render() {
    return <div id="mapEl" className={cx('mapEl')} />;
  }
}
