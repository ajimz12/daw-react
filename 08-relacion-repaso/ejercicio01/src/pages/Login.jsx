import React from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { user } = useAuth();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login successful!");    
  };

  return (
    <>
      <form className="flex flex-col">
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input
          onClick={handleLogin}
          className="bg-blue-400 mr-50 ml-50 p-2"
          type="submit"
          value="Login"
        />
      </form>
    </>
  );
};

export default Login;
