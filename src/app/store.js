import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import formSliceReducer from "../modules/formSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formSliceReducer,
  },
});
