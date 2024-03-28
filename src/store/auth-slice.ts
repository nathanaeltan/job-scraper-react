import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
};
const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<{ token: string }>) {
      state.isAuthenticated = action.payload.token ? true : false;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
  },
});

export const { loginUser } = authSlice.actions;
