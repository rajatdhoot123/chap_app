const AUTH_USER = "AUTH_USER";
const UNAUTH_USER = "UNAUTH_USER";
const FETCHING_USER = "FETCHING_USER";
const FETCHING_USER_FAILURE = "FETCHING_USER_FAILURE";
const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";
const REMOVE_FETCHING_USER = "REMOVE_FETCHING_USER";

import action from "../actions/actions";

export const authUser = id => {
  return {
    type: AUTH_USER,
    id: id
  };
};


const initialState = {
  1: {
    name: "Mahesh Sharma",
    description: "Director, Let's Venture"
  },
  isFetching: false,
  type: "host",
  authedId: 1,
  isAuthed: "true",
  error: ""
};
import React from 'react'

export default function users(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.id
      };

    default:
      return state;
  }
}
