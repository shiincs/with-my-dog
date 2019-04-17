import React from 'react';
import classNames from 'classnames/bind';

import styles from './LayoutView.scss';

const cx = classNames.bind(styles);

const LayoutView = () => {
  return (
    <header className={cx('header')}>
      <h1 className={cx('appTitle')}>With My Dog</h1>
      <div className={cx('navButton')}>
        <a href="#" className={cx('btn')}>
          메뉴 버튼
        </a>
      </div>
      <nav className={cx('navMenu')}>
        <ul className={cx('navList')}>
          <li className={cx('navItem')}>내 참여</li>
          <li className={cx('navItem')}>내 장소</li>
          <li className={cx('navItem')}>도움말</li>
          <li className={cx('navItem')}>의견 보내기</li>
          <li className={cx('navItem')}>설정</li>
          <li className={cx('navItem')}>로그아웃</li>
        </ul>
      </nav>
      <div className={cx('addPlaceButton')}>
        <a href="#" className={cx('btn')}>
          장소 등록하기
        </a>
      </div>
    </header>
  );
};

export default LayoutView;
