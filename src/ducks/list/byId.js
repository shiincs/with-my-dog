import { FETCH_LIST_SUCCESS } from './index';
const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LIST_SUCCESS:
      const nextState = { ...state };
      action.response.forEach(item => {
        nextState[item.id] = item;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getListItem = (state, id) => state[id];
