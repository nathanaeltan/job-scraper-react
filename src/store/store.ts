import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-slice";
import jobSlice from "./job-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    job: jobSlice
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),

});
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
