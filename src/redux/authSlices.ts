import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../types';


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
    login: (state, action: PayloadAction<{ email: string; token: string; isLoggedIn: boolean; name: string }>) => {
      console.log("Logging in...", action.payload.email);
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.name = action.payload.name; // Set the name property
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
