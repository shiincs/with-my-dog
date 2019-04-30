import React from 'react';
import classNames from 'classnames/bind';

import AddPlaceContainer from '../../containers/AddPlaceContainer';

import styles from './LayoutView.scss';

const cx = classNames.bind(styles);

const LayoutView = props => {
  const {
    isNavMenuOpen,
    handleNavMenu,
    isPlaceSearchOpen,
    handlePlaceSearchMenu,
  } = props;

  return (
    <>
      <header className={cx('header')}>
        <h1 className={cx('appTitle')}>같이가개</h1>
        <div className={cx('navButton')}>
          <a className={cx('btn')} onClick={() => handleNavMenu()}>
            메뉴
          </a>
        </div>
        <nav className={cx('navMenu', { open: isNavMenuOpen })}>
          <ul className={cx('navList')}>
            <li className={cx('navItem')}>내 참여</li>
            <li className={cx('navItem')}>내 장소</li>
            <li className={cx('navItem')}>도움말</li>
            <li className={cx('navItem')}>의견 보내기</li>
            <li className={cx('navItem')}>설정</li>
            <li className={cx('navItem')}>로그아웃</li>
          </ul>
          <a onClick={() => handleNavMenu()}>닫기</a>
        </nav>
        <div className={cx('addPlaceButton')}>
          <a className={cx('btn')} onClick={() => handlePlaceSearchMenu()}>
            장소 등록
          </a>
        </div>
      </header>
      <div
        className={cx('navMenuOverlay', { open: isNavMenuOpen })}
        onClick={isNavMenuOpen ? () => handleNavMenu() : null}
      />
      <AddPlaceContainer
        isPlaceSearchOpen={isPlaceSearchOpen}
        handlePlaceSearchMenu={handlePlaceSearchMenu}
      />
    </>
  );
};

export default LayoutView;
