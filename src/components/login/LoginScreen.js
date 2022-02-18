import React from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", {
      replace: true,
    });
    console.log("handle login xd");
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
