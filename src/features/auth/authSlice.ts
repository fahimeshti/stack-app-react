import { createSlice } from "@reduxjs/toolkit";

type AuthT = {
  user: object | null;
  token: string | null;
};

const initialState: AuthT = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },

    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

const { actions, reducer } = authSlice;
export const { setCredentials, logOut } = actions;
export default reducer;
