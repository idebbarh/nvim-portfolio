import { configureStore } from "@reduxjs/toolkit";
import colorSchemeSlice from "../slices/colorSchemeSlice";
const store = configureStore({
  reducer: {
    colorScheme: colorSchemeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
