import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import { productsApi } from "../features/products/productsApi";
import cartsReducer from "../features/carts/cartsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
