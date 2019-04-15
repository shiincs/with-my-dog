import * as api from '../api';

// action type
const FETCH_LIST_REQUEST = 'with-my-dog/list/FETCH_LIST_REQUEST';
const FETCH_LIST_SUCCESS = 'with-my-dog/list/FETCH_LIST_SUCCESS';
const FETCH_LIST_FAILURE = 'with-my-dog/list/FETCH_LIST_FAILURE';

// action creator
const fetchListRequest = category => ({
  type: FETCH_LIST_REQUEST,
  category,
});

const fetchListFailure = (category, error) => ({
  type: FETCH_LIST_FAILURE,
  category,
  error,
});

const fetchList = category => async dispatch => {
  // fetch start
  dispatch(fetchListRequest(category));

  try {
    // fetching
    api.fetchList(category).then(response => {
      console.log(response);
      dispatch({
        type: FETCH_LIST_SUCCESS,
        category,
        response,
      });
    });
  } catch (error) {
    // if error
    dispatch(fetchListFailure(category, error));
  }
};

// reducer
const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return true;
    case FETCH_LIST_SUCCESS:
    case FETCH_LIST_FAILURE:
      return false;
    default:
      return false;
  }
};
