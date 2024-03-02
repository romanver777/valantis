import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import catalogFilter from "./catalog-filter";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    catalogFilter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: false,
});
