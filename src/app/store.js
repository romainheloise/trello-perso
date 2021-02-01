import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "../slice/counterSlice";

export default configureStore({
  reducer: {
    column: columnReducer,
  },
});
