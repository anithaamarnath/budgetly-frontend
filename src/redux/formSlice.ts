import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FormState from "../types";


const initialState: FormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: null,
  loading: false,
  token: "",
  isLoggedIn: false
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<{ id: keyof FormState; value: string }>) {
      const { id, value } = action.payload;
      if (id in state) {
        (state[id] as string) = value;
      }
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearForm() {
      return { ...initialState }; 
    }
  },
});

export const { setFormData, setLoading, setError, clearForm } = formSlice.actions;
export default formSlice.reducer;
