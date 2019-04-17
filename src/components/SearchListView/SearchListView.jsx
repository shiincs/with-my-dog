import React from 'react';

import classNames from 'classnames/bind';

import styles from './SearchListView.scss';

const cx = classNames.bind(styles);

const SearchListView = props => {
  return (
    <ul className={cx('searchList')}>
      <li className={cx('searchItem')}>검색결과</li>
      <li className={cx('searchItem')}>검색결과</li>
      <li className={cx('searchItem')}>검색결과</li>
    </ul>
  );
};

export default SearchListView;
