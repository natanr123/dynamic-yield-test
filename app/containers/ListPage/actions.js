import * as constants from './constants';

export function loadNotes() {
  return {
    type: constants.LOAD_NOTES,
  };
}

export function nodesLoaded(notes) {
  return {
    type: constants.NOTES_LOADED,
    notes
  };
}

