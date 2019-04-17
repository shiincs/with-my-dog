import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchListView from '../components/SearchListView/SearchListView';
import {
  getVisibleList,
  getIsFetching,
  getErrorMessage,
  fetchList,
} from '../ducks/list';

class SearchListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.caegory !== prevProps.category) {
  //     this.fetchData();
  //   }
  // }

  fetchData() {
    const { category, fetchList } = this.props;
    fetchList(category).then(() => console.log('list done!'));
  }

  render() {
    const { list, isListOpen, isFetching, getErrorMessage } = this.props;
    return <SearchListView list={list} isListOpen={isListOpen} />;
  }
}

const mapStateToProps = state => {
  const category = 'all';
  return {
    list: getVisibleList(state, category),
    isFetching: getIsFetching(state, category),
    category,
    getErrorMessage: getErrorMessage(state, category),
  };
};

SearchListContainer = connect(
  mapStateToProps,
  { fetchList }
)(SearchListContainer);

export default SearchListContainer;
