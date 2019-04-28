import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../ducks';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// if (process.env.NODE_ENV !== 'production') {
//   store = createStore(
//     rootReducer,
//     compose(
//       applyMiddleware(...middlewares),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
// } else {

// }

export default store;
