import * as constants from './constants';

export function loadUsers(username) {
  return {
    type: constants.LOAD_USERS,
    username
  };
}

export function usersLoaded(users) {
  return {
    type: constants.USERS_LOADED,
    users
  };
}

