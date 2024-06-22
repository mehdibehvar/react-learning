// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserStoreProvider from "./contexts/userStore";
import CartStoreProvider from "./contexts/cartStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserStoreProvider>
      <CartStoreProvider>
        <App />
      </CartStoreProvider>
    </UserStoreProvider>
  </React.StrictMode>
);
