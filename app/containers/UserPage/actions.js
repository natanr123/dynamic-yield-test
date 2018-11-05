import * as constants from './constants';

export function loadUser(username) {
  return {
    type: constants.LOAD_USER,
    username
  };
}

export function userLoaded(user) {
  return {
    type: constants.USER_LOADED,
    user
  };
}

