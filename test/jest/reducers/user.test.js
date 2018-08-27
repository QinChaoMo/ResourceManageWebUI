import { User } from '../../../src/reducers/user';
import {
  CreateSignInAction,
  CreateSignOutAction,
} from '../../../src/actions/user';

test('user is null', () => {
  const data = { type: 'test null user' };
  expect(User(null, data)).toBeNull();
});

test('user was sign in', () => {
  const signin = CreateSignInAction();
  expect(User({}, signin)).toEqual(signin);
});

test('user was sign out', () => {
  const signout = CreateSignOutAction();
  expect(User({}, signout)).toEqual(signout);
});
