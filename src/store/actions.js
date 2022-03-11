export const LOGIN = "LOGIN";

export function login(Boolean) {
  return {
    type: LOGIN,
    payload: Boolean,
  };
}
