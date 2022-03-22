export const LOGIN = "LOGIN";
export const LOGINADMIN = "LOGINADMIN";

export function login(Boolean) {
  return {
    type: LOGIN,
    payload: Boolean,
  };
}

export function loginAdmin(Boolean) {
  return {
    type: LOGINADMIN,
    payload: Boolean,
  };
}
