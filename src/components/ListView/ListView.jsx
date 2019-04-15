import React from 'react';
import classNames from 'classnames/bind';

import MapContainer from '../../containers/MapContainer';
import styles from './ListView.scss';

const cx = classNames.bind(styles);

const ListView = props => {
  return (
    <section className={cx('searchSection')}>
      <h2 className={cx('readableHidden')}>검색목록</h2>
      <form className={cx('searchForm')}>
        <legend className={cx('readableHidden')}>장소검색</legend>
        <fieldset>
          <input
            type="text"
            className={cx('searchInput')}
            placeholder="장소를 검색하세요!"
          />
        </fieldset>
      </form>
      <ul className={cx('categoryList')}>
        <li className={cx('categoryItem')}>
          <a href="#">모두</a>
        </li>
        <li className={cx('categoryItem')}>
          <a href="#">식당</a>
        </li>
        <li className={cx('categoryItem')}>
          <a href="#">카페</a>
        </li>
        <li className={cx('categoryItem')}>
          <a href="#">주점</a>
        </li>
      </ul>
      <MapContainer />
      <ul className={cx('searchList')}>
        <li className={cx('searchItem')}>검색결과</li>
        <li className={cx('searchItem')}>검색결과</li>
        <li className={cx('searchItem')}>검색결과</li>
      </ul>
    </section>
  );
};

export default ListView;
