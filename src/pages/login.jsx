// src/pages/Login.js
import React, { useContext, useState } from "react";
import cookies from "js-cookie";
import { post } from "../utils/httpClient/httpClient";
import { useNavigate } from "react-router-dom";
import { actionType, userStore } from "../contexts/userStore";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   setError('');
  //   try {
  //     const response = await post('/auth/login', {
  //       username,
  //       password,
  //     });
  //     cookies.set('token',response.token);
  //     navigate('/');
  //   } catch (err) {
  //     setLoading(false);
  //     setError('Login failed. Please check your username and password.');
  //   } 
  // };
  const { state, dispatch } = useContext(userStore);
  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch({
      type: actionType.login_request,
    });
    try {
      const response = await post("/auth/login", {
        username,
        password,
      });
      dispatch({
        type: actionType.login_success,
        payload:{
          username,
          password,
          token:JSON.stringify(response.token)
        }
      });
      navigate("/");
    } catch (err) {
      dispatch({
        type: actionType.login_error,
        payload:{
          msg:"Login failed. Please check your username and password."
        }
      });
    } 
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {state.error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {state.loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
