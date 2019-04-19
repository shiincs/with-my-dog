import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';

import styles from './CategoryNavView.scss';

const cx = classNames.bind(styles);

const CategoryNavView = props => {
  return (
    <section className={cx('categorySection')}>
      <h2 className={cx('readableHidden')}>카테고리 메뉴</h2>
      <ul className={cx('categoryList')}>
        <li className={cx('categoryItem')}>
          <Link to="/">모두</Link>
        </li>
        <li className={cx('categoryItem')}>
          <Link to="/restaurant">식당</Link>
        </li>
        <li className={cx('categoryItem')}>
          <Link to="/cafe">카페</Link>
        </li>
        <li className={cx('categoryItem')}>
          <Link to="/pub">주점</Link>
        </li>
        <li className={cx('categoryItem', 'mapListToggle')}>
          {props.isListOpen ? (
            <a
              className={cx('listToMap')}
              onClick={() => props.handleMapListToggle()}
            >
              지도
            </a>
          ) : (
            <a
              className={cx('mapToList')}
              onClick={() => props.handleMapListToggle()}
            >
              목록
            </a>
          )}
        </li>
      </ul>
    </section>
  );
};

export default CategoryNavView;
