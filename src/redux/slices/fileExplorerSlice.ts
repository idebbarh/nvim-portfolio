import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isFileExplorerOpen: boolean;
};

const initialState: initialStateType = {
  isFileExplorerOpen: true,
};

const fileExplorerSlice = createSlice({
  name: "fileExplorer",
  initialState,
  reducers: {
    toggleFileExplorer: (state) => {
      state.isFileExplorerOpen = !state.isFileExplorerOpen;
    },
  },
});

export const { toggleFileExplorer } = fileExplorerSlice.actions;

export const selectIsFileExplorerOpen = (state: any) =>
  state.fileExplorer.isFileExplorerOpen;

export default fileExplorerSlice;
