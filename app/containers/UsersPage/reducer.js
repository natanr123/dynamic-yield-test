import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS(
  {
    users: null,
  }
);

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.USERS_LOADED:
      return state.set('users', action.users);
    default:
      return state;
  }
}

export default reducer;
