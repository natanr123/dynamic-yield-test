import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS(
  {
    notes: null,
  }
);

function problemReducer(state = initialState, action) {
  switch (action.type) {
    case constants.NOTES_LOADED:
      return state.set('notes', action.notes);
    default:
      return state;
  }
}

export default problemReducer;
