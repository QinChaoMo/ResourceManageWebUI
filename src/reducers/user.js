import {
  SIGN_IN,
  SIGN_OUT,
  CreateSignInAction,
  CreateSignOutAction,
} from '../actions/user';

/**
 * {
    id: null,
    name: null,
    roule: null,
    theme: 'dark',
    status: null,
 * }
 */

export const initUserState = null;

export function User(state = initUserState, action) {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, CreateSignInAction());
    case SIGN_OUT:
      return Object.assign({}, state, CreateSignOutAction());
    default:
      return state;
  }
}
