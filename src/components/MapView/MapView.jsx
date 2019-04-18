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
    /* 리스트 props를 가져온다 */
    const { list } = this.props;

    /* 맵이 렌더링 될 엘리먼트 지정 */
    const el = document.getElementById('mapEl');

    /* 맵 옵션 생성 */
    let mapOptions = {
      center:
        list.length > 0
          ? new daum.maps.LatLng(list[0].latitude, list[0].longitude)
          : new daum.maps.LatLng(37.552617, 126.904614),
      level: 3,
    };

    /* 맵 생성 */
    let daumMap = new daum.maps.Map(el, mapOptions);

    /* 카피라이트 위치를 우하단으로 변경*/
    daumMap.setCopyrightPosition(daum.maps.CopyrightPosition.BOTTOMRIGHT, true);

    /* 마커를 그린다 */
    this.drawMarker(daumMap, list);
  }

  // handleMarker() {
  //   this.setState(prevProps => ({ onMarker: !prevProps }));
  // }

  drawMarker(map, list) {
    const markers = [];
    const overlays = [];

    for (let i = 0; i < list.length; i++) {
      /* 마커를 찍는다 */
      let marker = new daum.maps.Marker({
        map, // 마커를 표시할 지도
        position: new daum.maps.LatLng(list[i].latitude, list[i].longitude), // 마커를 표시할 위치
        title: list[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됨
      });

      markers.push(marker);

      /* 커스텀 오버레이의 내용 */
      let content = `
        <div class="infoOverlay">
          <figure>
            <figcaption>
              <dt><a href='${list[i].url}'>${list[i].title}</a></dt>
              <dl>${list[i].address}</dl>
            </figcaption>
          </figure>
        </div>
      `;

      /* 오버레이 생성 */
      let overlay = new daum.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition(),
        yAnchor: 1.8,
      });

      /* 인포윈도우 생성 */
      // let overlay = new daum.maps.InfoWindow({
      //   content: content,
      //   map: map,
      //   position: marker.getPosition(),
      // });

      overlays.push(overlay);

      /* 일단 모든 오버레이를 꺼둔다 */
      overlay.setMap(null);
    }

    const handleMarker = flag => {
      /* 현재 마커의 상태를 변경 (마커가 클릭되었는지 아닌지, 즉 오버레이가 떠있는지 상태를 확인) */
      this.setState({ onMarker: flag });
    };

    /* 마커를 클릭 했을 때 현재 마커의 상태를 읽어오기 위해 this를 MapView.jsx 컴포넌트에 묶어둔다 */
    const bindThis = this;

    for (let i = 0; i < list.length; i++) {
      daum.maps.event.addListener(markers[i], 'click', function() {
        /* 마커 클릭에 대한 이벤트이기 때문에 이벤트 발생 시 this는 마커에 묶이게 된다 */
        // map.setCenter(
        //   new daum.maps.LatLng(list[i].latitude, list[i].longitude)
        // );
        overlays.forEach(overlay => overlay.setMap(null));
        overlays[i].setMap(map);
        if (!bindThis.state.onMarker) {
          handleMarker(true);
        }
      });
    }

    daum.maps.event.addListener(map, 'click', function() {
      if (bindThis.state.onMarker) {
        overlays.forEach(overlay => overlay.setMap(null));
        handleMarker(false);
      }
    });
  }

  render() {
    return <div id="mapEl" className={cx('mapEl')} />;
  }
}
