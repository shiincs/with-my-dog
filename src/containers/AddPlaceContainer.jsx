/* global daum */
import React, { Component } from 'react';

import AddPlaceView from '../components/AddPlaceView/AddPlaceView';

export default class AddPlaceContainer extends Component {
  // state = {
  //   inputValue: '',
  // };

  // handleChange = e => {
  //   this.setState({
  //     inputValue: e.target.value,
  //   });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const ps = new daum.maps.services.Places();

  //   searchPlaces(this.state.inputValue);

  //   // 키워드 검색을 요청하는 함수입니다
  //   function searchPlaces(inputValue) {
  //     let keyword = inputValue;

  //     if (!keyword.replace(/^\s+|\s+$/g, '')) {
  //       alert('키워드를 입력해주세요!');
  //       return false;
  //     }

  //     // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
  //     ps.keywordSearch(keyword, placesSearchCB);
  //   }

  //   // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  //   function placesSearchCB(data, status, pagination) {
  //     if (status === daum.maps.services.Status.OK) {
  //       // 정상적으로 검색이 완료됐으면
  //       // 검색 목록과 마커를 표출합니다
  //       // displayPlaces(data);
  //       // 페이지 번호를 표출합니다
  //       // displayPagination(pagination);
  //     } else if (status === daum.maps.services.Status.ZERO_RESULT) {
  //       alert('검색 결과가 존재하지 않습니다.');
  //       return;
  //     } else if (status === daum.maps.services.Status.ERROR) {
  //       alert('검색 결과 중 오류가 발생했습니다.');
  //       return;
  //     }
  //   }
  // };

  render() {
    const { isPlaceSearchOpen, handlePlaceSearchMenu } = this.props;
    // const { inputValue } = this.state;
    return (
      <AddPlaceView
        isPlaceSearchOpen={isPlaceSearchOpen}
        handlePlaceSearchMenu={handlePlaceSearchMenu}
        // inputValue={inputValue}
        // handleChange={e => this.handleChange(e)}
        // handleSubmit={e => this.handleSubmit(e)}
      />
    );
  }
}
