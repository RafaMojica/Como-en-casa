import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  nombre: null,
  email: null,
};

export const userLogin = createAction("USER_LOGIN");
export const userLogOut = createAction("USER_LOGOUT");

const userReducer = createReducer(initialState, {
  [userLogin]: (state, action) =>
    (state = {
      id: action.payload.id,
      nombre: action.payload.nombre,
      email: action.payload.email,
    }),
  [userLogOut]: (state, action) => state = {},
});

export default userReducer;
