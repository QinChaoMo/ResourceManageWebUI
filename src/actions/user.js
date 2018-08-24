export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export function CreateUserStatusAction(type, status) {
  return {
    type,
    status,
  };
}
