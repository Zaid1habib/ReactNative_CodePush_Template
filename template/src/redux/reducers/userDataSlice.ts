import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    userData:{}[]
}

const initialState: initialState = {
    userData:[]
}

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    userData: (state, action) => {state.userData = action.payload},
  },
});

export const { userData } = userProfileSlice.actions;

export default userProfileSlice.reducer;
