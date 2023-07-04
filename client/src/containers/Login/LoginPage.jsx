import './LoginPage.css'
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../components/Redux/user";
import { resetRegistered } from "../../components/Redux/user";
import { API_URL, FRONT_URL } from "../../config";
import Layout from "../Layout";
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
    try {
      const response = await axios.get(
        `${API_URL}/auth/o/google-oauth2/?redirect_uri=${FRONT_URL}/google`
      );

      const auth_url = response.data.authorization_url;
      window.location.replace(auth_url);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Layout title="Code Community | Login" content="Login page">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card rounded-lg p-5 bg-dark shadow text-light d-flex flex-column login-card">
          <h1 className="text-center">Log into your Account</h1>
          <form className="mt-5" onSubmit={onSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control form-control-lg"
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
                className="form-control form-control-lg"
                type="password"
                name="password"
                onChange={onChange}
                value={password}
                required
              />
              <Link to="/ResetPassword">
                <button className="btn btn-link mt-2" type="button">
                  <h6>Forgot the password?</h6>
                </button>
              </Link>
            </div>
            {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden ">Loading...</span>
              </div>
            </div>
            ) : (
              <button className="btn btn-primary mt-4 w-100 rounded-pill fw-bold fs-5">Login</button>
            )}
          </form>
          <button className="button" onClick={googleAuthSession}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" className="svg">
              <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" className="blue"></path>
              <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" className="green"></path>
              <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" className="yellow"></path>
              <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" className="red"></path>
            </svg>
            <span className="text">Continue with Google</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
