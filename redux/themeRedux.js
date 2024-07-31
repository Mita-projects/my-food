import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    changeThemeState: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeThemeState } = themeSlice.actions;
export default themeSlice.reducer;
