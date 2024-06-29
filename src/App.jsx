import Products from "./pages/Products";
import Product from "./pages/product/[id]";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import { SnackbarProvider } from "notistack";

import Cart from "./pages/Cart";
import Home from "./pages/home";
import  { useContext, useEffect } from "react";
import { actionType, userStore } from "./contexts/userStore";
import { get } from "./utils/httpClient/httpClient";


function App() {
  const { dispatch } = useContext(userStore);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await get('/users/3');
        dispatch({
          type: actionType.Set_user_info,
          payload: response,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home/>} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
