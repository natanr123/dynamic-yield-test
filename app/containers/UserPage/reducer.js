import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS(
  {
    user: null,
  }
);

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.USER_LOADED:
      return state.set('user', action.user);
    default:
      return state;
  }
}

export default reducer;
