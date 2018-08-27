import {
  CreateSignInAction,
  CreateSignOutAction,
  SIGN_IN,
  SIGN_OUT,
} from '../../../src/actions/user';

test('create sign in action', () => {
  const data = CreateSignInAction();
  expect(data).toEqual({ type: SIGN_IN, status: SIGN_IN });
});
test('create sign out action', () => {
  const data = CreateSignOutAction();
  expect(data).toEqual({ type: SIGN_OUT, status: SIGN_OUT });
});
