import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.website = action.payload.website;
    },

    reset: (state) => {
      state.id = 0;
      state.name = "";
      state.username = "";
      state.email = "";
      state.phone = "";
      state.website = "";
    },
  },
});

export const { setUser, reset } = userSlice.actions;

export default userSlice.reducer;
