import { createAction } from "@reduxjs/toolkit";

const token = createAction("auth/token", (token) => {
  return {
    payload: {
      token,
    },
  };
});

export { token };
