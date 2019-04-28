import React from 'react';
import classNames from 'classnames/bind';

import LayoutContianer from '../../containers/LayoutContainer';
import MapContainer from '../../containers/MapContainer';
import styles from './MainView.scss';
import SearchFormContainer from '../../containers/SearchFormContainer';
import SearchListContainer from '../../containers/SearchListContainer';
import CategoryNavContainer from '../../containers/CategoryNavContainer';

const cx = classNames.bind(styles);

const MainView = props => {
  return (
    <div className={cx('mainWrapper')}>
      <LayoutContianer>
        <CategoryNavContainer {...props} />
        <SearchFormContainer />
        <SearchListContainer {...props} />
        {/* <MapContainer /> */}
      </LayoutContianer>
    </div>
  );
};

export default MainView;
