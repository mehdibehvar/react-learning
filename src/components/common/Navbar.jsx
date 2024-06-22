// src/components/Navbar.js
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { actionType, userStore } from "../../contexts/userStore";
import { get } from "../../utils/httpClient/httpClient";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { state, dispatch } = useContext(userStore);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
    <nav className="bg-primary p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <CartIcon />
          <div className="flex items-center relative">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <img
                src="https://via.placeholder.com/150" // Replace with actual user avatar URL
                alt="User Avatar"
                className="h-8 w-8 rounded-full"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-0  mt-8 w-80 bg-white rounded-md shadow-lg z-20">
                <div className="flex items-center gap-1 py-2 px-4 text-gray-700">
                  <p className="font-semibold">Username:</p>
                  <p className="text-sm">{state.username}</p>
                </div>
                <div className="border-t border-gray-200"></div>
                <div className="py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/products" className="text-white hover:text-gray-200">
            Products
          </Link>
          <Link to="/login" className="text-white hover:text-gray-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
