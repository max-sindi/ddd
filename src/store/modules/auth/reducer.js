import {error, success} from "redux-saga-requests"

const CHECK_AUTHORITY = 'CHECK_AUTH_STATUS'

const initialState = {
  isAuthFetching: false,
  authFetchingErrorMessage: '', // if will need
  profile: null,
}

export default (state = initialState, action) => {
  const {type, payload} = action
  const actions = {
    [CHECK_AUTHORITY]: () => ({ ...state, isAuthFetching: true}),
    [ error(CHECK_AUTHORITY) ]: () => ({...state, isAuthFetching: false, authFetchingErrorMessage: 'Error while auth fetching'}),
    [ success(CHECK_AUTHORITY) ]: () => ({...state, isAuthFetching: false, profile: payload})
  }

  return actions[type] ? actions[type]() : state;
}
