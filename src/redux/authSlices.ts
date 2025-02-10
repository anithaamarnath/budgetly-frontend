import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string;
  token: string;
  isLoggedIn: boolean;
  name: string;
}

const initialState: AuthState = {
  email: "",
  token: "",
  isLoggedIn: false,
  name: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.email = "";
      state.token = "";
      state.isLoggedIn = false;
      state.name = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
