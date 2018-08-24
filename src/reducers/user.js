import { SIGN_IN, SIGN_OUT, CreateUserStatus } from '../actions/user';

function User(
  state = {
    id: null,
    name: null,
    roule: null,
    theme: 'dark',
    status: null,
  },
  action,
) {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, CreateUserStatus(SIGN_IN, SIGN_IN));
    case SIGN_OUT:
      return Object.assign({}, state, CreateUserStatus(SIGN_OUT, SIGN_OUT));
    default:
      return state;
  }
}

export default User;
