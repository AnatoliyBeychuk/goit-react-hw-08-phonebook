import { createReducer } from "@reduxjs/toolkit";
import { token } from "./auth-actions";

export const userReducer = createReducer(
  {},
  {
    [token]: (_, { payload }) => payload,
  }
);
