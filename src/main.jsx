import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { fetchProducts } from "./features/products/productsSlice";
import { getTotals } from "./features/carts/cartsSlice.jsx";

store.dispatch(fetchProducts());
store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
