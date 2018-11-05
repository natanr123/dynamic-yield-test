import axios from 'axios';
import * as effects from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';

function* loadUsersWorker(action) {
  const url = `https://api.github.com/search/users?q=${action.username}`;
  const response = yield effects.call(() => axios.get(url));
  yield effects.put(actions.usersLoaded(response.data.items));
}

export function* startWatcher() {
  yield [
    effects.takeLatest(constants.LOAD_USERS, loadUsersWorker),
  ];
}
