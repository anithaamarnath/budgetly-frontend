import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import authReducer from "./authSlices";
import budgetReducer from "./budgetSlices";

const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    budget: budgetReducer,
   
  
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
