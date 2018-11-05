import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS(
  {
    users: null,
    loading: null
  }
);

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.LOAD_USERS:
      return state.set('loading', true).set('users', null);
    case constants.USERS_LOADED:
      return state.set('loading', false).set('users', action.users);
    default:
      return state;
  }
}

export default reducer;
