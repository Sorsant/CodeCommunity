import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../components/Redux/user";
import { resetRegistered } from "../components/Redux/user";
import Layout from "../components/Layout";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, registered, isAuthenticated } = useSelector(
    (state) => state.userdb
  );


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (registered) dispatch(resetRegistered());
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [dispatch, registered, isAuthenticated, navigate]);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleAuthSession = async () => {
    const res = await axios.get('http://localhost:8000/auth/o/google-oauth2/?redirect_uri=http://localhost:3000/google', { withCredentials: true });
    const authorizationUrl = res.data.authorization_url;

    if (authorizationUrl) {
      window.location.replace(authorizationUrl);
    } else {
      console.error('No se encontró la URL de autorización en la respuesta');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Layout title="Code Community | Login" content="Login page">
      <h1>Log into your Account</h1>
      <form className="mt-5" onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={onChange}
            value={email}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={onChange}
            value={password}
            required
          />
          <Link to={'/ResetPassword'}>
            <button className="btn btn-link mt-2" type="button">
              Forgot the password?
            </button>
          </Link>
        </div>
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button className="btn btn-primary mt-4">Login</button>
        )}
        <button onClick={googleAuthSession}>
          Google
        </button>
      </form>
    </Layout>
  );
};

export default LoginPage;
