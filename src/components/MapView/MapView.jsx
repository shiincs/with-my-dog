/* global daum */

import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import _ from 'lodash';

import { withMap } from '../../contexts/MapContext';

import styles from './MapView.scss';
// import marker_bar from '../../assets/images/Marker_Bar.svg';
// import marker_cafe from '../../assets/images/Marker_Cafe.svg';
// import marker_restaurant from '../../assets/images/Marker_Restaurant.svg';

const cx = classNames.bind(styles);

class MapView extends PureComponent {
  state = {
    onMarker: false,
  };

  componentDidMount() {
    const { handleMap, list } = this.props;
    handleMap(list);
  }

  componentDidUpdate(prevProps) {
    const { handleMap, list } = this.props;

    if (!_.isEqual(this.props.list, prevProps.list)) {
      handleMap(list);
    }
  }

  // handleMap() {
  //   /* 리스트 props를 가져온다 */
  //   const { list } = this.props;

  //   /* 맵이 렌더링 될 엘리먼트 지정 */
  //   const el = document.getElementById('mapEl');

  //   /* 맵 옵션 생성 */
  //   let mapOptions = {
  //     center:
  //       list.length > 0
  //         ? new daum.maps.LatLng(list[0].latitude, list[0].longitude)
  //         : new daum.maps.LatLng(37.552617, 126.904614),
  //     level: 3,
  //   };

  //   /* 맵 생성 */
  //   let daumMap = new daum.maps.Map(el, mapOptions);

  //   /* 카피라이트 위치를 우하단으로 변경*/
  //   daumMap.setCopyrightPosition(daum.maps.CopyrightPosition.BOTTOMRIGHT, true);

  //   /* 마커를 그린다 */
  //   this.drawMarker(daumMap, list);
  // }

  // drawMarker(map, list) {
  //   const markers = [];
  //   const overlays = [];
  //   const imageSrc = (list, i) => {
  //     if (list[i].category === 'restaurant') {
  //       return marker_restaurant;
  //     } else if (list[i].category === 'cafe') {
  //       return marker_cafe;
  //     } else if (list[i].category === 'pub') {
  //       return marker_bar;
  //     }
  //   };

  //   for (let i = 0; i < list.length; i++) {
  //     const imageSize = new daum.maps.Size(33, 33); // 마커이미지의 크기입니다
  //     const imageOption = { offset: new daum.maps.Point(0, 35) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  //     // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  //     const markerImage = new daum.maps.MarkerImage(
  //       imageSrc(list, i),
  //       imageSize,
  //       imageOption
  //     );

  //     /* 마커를 찍는다 */
  //     let marker = new daum.maps.Marker({
  //       map, // 마커를 표시할 지도
  //       position: new daum.maps.LatLng(list[i].latitude, list[i].longitude), // 마커를 표시할 위치
  //       title: list[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됨
  //       image: markerImage,
  //     });

  //     markers.push(marker);

  //     /* 커스텀 오버레이의 내용 */
  //     let content = `
  //       <div class="infoOverlay">
  //         <figure>
  //           <figcaption>
  //             <dt><a href='${list[i].url}' target='_blank'>${
  //       list[i].title
  //     }</a></dt>
  //             <dl>${list[i].address}</dl>
  //           </figcaption>
  //         </figure>
  //       </div>
  //     `;

  //     /* 오버레이 생성 */
  //     let overlay = new daum.maps.CustomOverlay({
  //       content: content,
  //       map: map,
  //       position: marker.getPosition(),
  //       xAnchor: 0.45,
  //       yAnchor: 1.65,
  //       clickable: true,
  //     });

  //     overlays.push(overlay);

  //     /* 일단 모든 오버레이를 꺼둔다 */
  //     overlay.setMap(null);
  //   }

  //   const handleMarker = flag => {
  //     /* 현재 마커의 상태를 변경 (마커가 클릭되었는지 아닌지, 즉 오버레이가 떠있는지 상태를 확인) */
  //     this.setState({ onMarker: flag });
  //   };

  //   /* 마커를 클릭 했을 때 현재 마커의 상태를 읽어오기 위해 this를 MapView.jsx 컴포넌트에 묶어둔다 */
  //   const bindThis = this;

  //   for (let i = 0; i < list.length; i++) {
  //     daum.maps.event.addListener(markers[i], 'click', function() {
  //       /* 마커 클릭에 대한 이벤트이기 때문에 이벤트 발생 시 this는 마커에 묶이게 된다 */
  //       overlays.forEach(overlay => overlay.setMap(null));
  //       overlays[i].setMap(map);
  //       if (!bindThis.state.onMarker) {
  //         handleMarker(true);
  //       }
  //     });
  //   }

  //   daum.maps.event.addListener(map, 'click', function() {
  //     if (bindThis.state.onMarker) {
  //       overlays.forEach(overlay => overlay.setMap(null));
  //       handleMarker(false);
  //     }
  //   });
  // }

  render() {
    return <div id="mapEl" className={cx('mapEl')} />;
  }
}

export default withMap(MapView);
