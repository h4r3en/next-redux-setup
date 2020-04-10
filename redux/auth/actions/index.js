export const AUTH_SING_IN_USER = "[AUTH] SIGN IN USER";
export const AUTH_SING_IN_USER_ERROR = "[AUTH] SIGN IN USER ERROR";
export const AUTH_SING_IN_USER_LOADING = "[AUTH] SIGN IN USER LOADING";

export function authSign() {
  return (dispatch) => {
    dispatch({
      type: AUTH_SING_IN_USER_LOADING,
    });

    dispatch({
      type: AUTH_SING_IN_USER,
      payload: { email: "jane.deo@loram.com", id: "0oi2ijjd32jj" },
    });
  };
}
