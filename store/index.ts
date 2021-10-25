import { configureStore } from "@reduxjs/toolkit";

import { usersListSlice } from "./getUsersList";
import { userDetailSlice } from "./getUserDetail";


const store = configureStore({
  reducer: {
    usersList: usersListSlice.reducer,
    userDetail: userDetailSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
