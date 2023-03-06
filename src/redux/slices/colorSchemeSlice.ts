import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

type InitialStateType = {
  color: string;
};

const initialState: InitialStateType = {
  color: window.localStorage.getItem("colorScheme")
    ? JSON.parse(window.localStorage.getItem("colorScheme") as string)
    : "tokyonight",
};

const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
      window.localStorage.setItem(
        "colorScheme",
        JSON.stringify(action.payload)
      );
    },
  },
});

export const { setColorScheme } = colorSchemeSlice.actions;

export const selectColorScheme = (state: RootState) => state.colorScheme.color;

export default colorSchemeSlice;
