import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../ducks';

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
