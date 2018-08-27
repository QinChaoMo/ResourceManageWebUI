export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export function CreateSignInAction() {
  return {
    type: SIGN_IN,
    status: SIGN_IN,
  };
}

export function CreateSignOutAction() {
  return {
    type: SIGN_OUT,
    status: SIGN_OUT,
  };
}
