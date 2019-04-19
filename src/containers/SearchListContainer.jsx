import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchListView from '../components/SearchListView/SearchListView';
import {
  getVisibleList,
  getIsFetching,
  getErrorMessage,
  fetchList,
} from '../ducks/list';

class SearchListContainer extends PureComponent {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.fetchData();
    }
  }

  fetchData() {
    const { category, fetchList } = this.props;
    fetchList(category).then(() => console.log('list done!'));
  }

  render() {
    const { list, isListOpen, isFetching, getErrorMessage } = this.props;
    return <SearchListView list={list} isListOpen={isListOpen} />;
  }
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { category },
    },
  }
) => {
  category = category || 'all';
  return {
    list: getVisibleList(state, category),
    isFetching: getIsFetching(state, category),
    category,
    getErrorMessage: getErrorMessage(state, category),
  };
};

SearchListContainer = withRouter(
  connect(
    mapStateToProps,
    { fetchList }
  )(SearchListContainer)
);

export default SearchListContainer;
