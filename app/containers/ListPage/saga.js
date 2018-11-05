import axios from 'axios';
import * as effects from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';

function* loadNotesWorker() {
  const url = 'http://localhost:3001/notes/all';
  const response = yield effects.call(() => axios.get(url));
  console.log(response.data);
  yield effects.put(actions.nodesLoaded(response.data));
}

export function* startWatcher() {
  yield [
    effects.takeLatest(constants.LOAD_NOTES, loadNotesWorker),
  ];
}
