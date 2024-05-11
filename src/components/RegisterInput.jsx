import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <form className="input-register" onSubmit={onFormSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={setName} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={setEmail} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={setPassword}
      />
      <button type="submit">Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
