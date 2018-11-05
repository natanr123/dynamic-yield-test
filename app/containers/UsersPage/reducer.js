import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS(
  {
    users: null,
  }
);

function problemReducer(state = initialState, action) {
  switch (action.type) {
    case constants.USERS_LOADED:
      console.log('ccccccccccC: ', action.users);
      return state.set('users', action.users);
    default:
      return state;
  }
}

export default problemReducer;
