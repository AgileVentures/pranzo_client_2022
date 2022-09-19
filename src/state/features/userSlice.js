import {  createSlice } from "@reduxjs/toolkit";




const initialState = { currentUser: null, authenticated: false };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.authenticated = true;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
