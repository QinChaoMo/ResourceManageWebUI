import { SIGN_IN, SIGN_OUT, CreateUserStatusAction } from '../actions/actions';

export default function User(
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
      return Object.assign({}, state, CreateUserStatusAction(SIGN_IN, SIGN_IN));
    case SIGN_OUT:
      return Object.assign(
        {},
        state,
        CreateUserStatusAction(SIGN_OUT, SIGN_OUT),
      );
    default:
      return state;
  }
}
