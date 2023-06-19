import axios from 'axios';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
} from './userTypes';

function fetchUsersRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const users = res.data;
        console.log(users);
        dispatch(fetchUsersSuccess(users));
        return users;
      })
      .catch((error) => fetchUsersFailure(error.message));
  };
};
