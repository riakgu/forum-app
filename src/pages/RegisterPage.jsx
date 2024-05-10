import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = async ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password })).then(
      ({ status }) => {
        if (status === 'success') navigate('/login');
      },
    );
  };

  return (
    <section className="regsiter-page">
      <h2>Fill out the form to register for an account.</h2>
      <RegisterInput register={onRegister} />
      <p>
        Already have an account?
        <Link to="/login">Login here</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
