import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import type { userDetail } from "../types";

export const getUserDetail = createAsyncThunk(
  "users/getUserDetail",
  async (userName: string) => {
    const [resUser, resRepos, resOrgs]: any = await Promise.all([
      axios.get(`https://api.github.com/users/${userName}`),
      axios.get(`https://api.github.com/users/${userName}/repos`),
      axios.get(`https://api.github.com/users/${userName}/orgs`),
    ]);

    const user = {
      userData: resUser.data,
      repos: resRepos.data,
      orgs: resOrgs.data,
    };
    return user as userDetail;
  }
);

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    status: "",
    userData: {
      id: 0,
      name: "",
      login: "",
      avatar_url: "",
    },
    repos: [],
    orgs: [],
  } as userDetail,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserDetail.fulfilled, (state: userDetail, action) => {
      state = action.payload;
      state.status = "fulfilled";
      return state;
    });
    builder.addCase(getUserDetail.pending, (state: userDetail, action) => {
      state.status = "pending";
    });
    builder.addCase(getUserDetail.rejected, (state: userDetail, action) => {
      state.status = "rejected";
    });
  },
});
