import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import type { user } from "../types";

export const getUsersList = createAsyncThunk(
  "users/getUsersList",
  async (userName: string) => {
    const res: any = await axios.get(
      `https://api.github.com/search/users?q=${userName}`
    );
    return res.data.items as user[];
  }
);

export const usersListSlice = createSlice({
  name: "usersList",
  initialState: {
    status: "",
    users: [] as user[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getUsersList.fulfilled,
      (state: { users: user[]; status: string }, action) => {
        state.users = action.payload;
        state.status = "fulfilled";
        return state;
      }
    );
    builder.addCase(
      getUsersList.pending,
      (state: { status: string }, action) => {
        state.status = "pending";
      }
    );
    builder.addCase(
      getUsersList.rejected,
      (state: { status: string }, action) => {
        state.status = "rejected";
      }
    );
  },
});
