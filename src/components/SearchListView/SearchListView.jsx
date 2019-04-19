import React from 'react';

import classNames from 'classnames/bind';

import styles from './SearchListView.scss';

const cx = classNames.bind(styles);

const SearchListView = props => {
  const { list, isListOpen } = props;

  return (
    <ul className={cx('searchList', { open: isListOpen })}>
      {list.map(item => {
        return (
          <li key={item.id} className={cx('searchItem')}>
            <figure>
              <figcaption>
                <dt>
                  <a href={item.url} target="_blank">
                    {item.title}
                  </a>
                </dt>
                <dl>{item.address}</dl>
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchListView;
