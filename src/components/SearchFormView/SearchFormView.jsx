import React from 'react';

import classNames from 'classnames/bind';

import styles from './SearchFormView.scss';

const cx = classNames.bind(styles);

const SearchFormView = () => {
  return (
    <form className={cx('searchForm')}>
      <fieldset>
        <legend className={cx('readableHidden')}>장소검색</legend>
        <input
          type="text"
          className={cx('searchInput')}
          placeholder="장소를 검색하세요!"
        />
        {/* <input type="button" value="검색" /> */}
      </fieldset>
    </form>
  );
};

export default SearchFormView;
