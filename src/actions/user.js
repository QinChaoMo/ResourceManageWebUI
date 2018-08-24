export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export function CreateUserStatus(actionType, status) {
  return {
    type: actionType,
    status,
  };
}
