import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <form className="input-login" onSubmit={onFormSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={setEmail} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={setPassword}
      />
      <button type="submit">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
