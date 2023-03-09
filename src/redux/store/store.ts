import { configureStore } from "@reduxjs/toolkit";
import colorSchemeSlice from "../slices/colorSchemeSlice";
import fileExplorerSlice from "../slices/fileExplorerSlice";

const store = configureStore({
  reducer: {
    colorScheme: colorSchemeSlice.reducer,
    fileExplorer: fileExplorerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
