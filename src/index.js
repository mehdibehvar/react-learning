// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Products from "./pages/Products";
import Product from "./pages/product/[id]";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import { SnackbarProvider } from "notistack";
import UserStoreProvider from "./contexts/userStore";
import CartStoreProvider from "./contexts/cartStore";
import Cart from "./pages/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <UserStoreProvider>
        <CartStoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<App />} />
              <Route path="products" element={<Products />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </CartStoreProvider>
      </UserStoreProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
