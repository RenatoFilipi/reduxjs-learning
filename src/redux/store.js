import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counter/counterSlice";
import userReducer from "../store/user/userSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, user: userReducer },
});
