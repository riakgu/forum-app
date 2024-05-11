import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginInput from "../components/LoginInput";
import { asyncLogin } from "../states/authUser/action";
import toast from "react-hot-toast";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncLogin({ email, password })).then(({ status }) => {
      if (status === "success") navigate("/");
      toast.success("Login successfully!")
    });
  };

  return (
    <section className="login-page">
      <h2>Login to use the app.</h2>
      <LoginInput login={onLogin} />
      <p>
        Don't have an account yet? <Link to="/register">Register here</Link>.
      </p>
    </section>
  );
}

export default LoginPage;
