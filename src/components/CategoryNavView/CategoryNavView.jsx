import React from 'react';

import classNames from 'classnames/bind';

import styles from './CategoryNavView.scss';

const cx = classNames.bind(styles);

const CategoryNavView = props => {
  return (
    <section className={cx('categorySection')}>
      <h2 className={cx('readableHidden')}>카테고리 메뉴</h2>
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
        <li className={cx('categoryItem', 'mapListToggle')}>
          {props.isListOpen ? (
            <a
              href="#"
              className={cx('listToMap')}
              onClick={() => props.handleMapListToggle()}
            >
              지도
            </a>
          ) : (
            <a
              href="#"
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
