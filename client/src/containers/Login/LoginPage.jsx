import "./LoginPage.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, googleAuthenticate } from "../../components/Redux/user";
import { resetRegistered } from "../../components/Redux/user";
import Layout from "../Layout";
import { clientID } from "../../config";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, registered, isAuthenticated, errors } = useSelector(
    (state) => state.userdb
  );
  const [auth, setAuth] = useState(false);
  const [formData, setFormData] = useState({});
  const [userGoogle, setUserGoogle] = useState({});

  const onSuccess = (response) => {
    setUserGoogle(response.profileObj);
    setAuth(true);
    document.getElementsByClassName("btn").hidden = true;
  };

  const onFailure = (response) => {
    console.log("Something went wrong");
  };

  if (auth === true) {
    dispatch(googleAuthenticate({ userGoogle }));
  }

  useEffect(() => {
    if (registered) dispatch(resetRegistered());
    if (isAuthenticated) {
      navigate("/home");
    }

    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  }, [dispatch, formData, isAuthenticated, navigate, registered]);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <form
            className="mt-5 needs-validation"
            onSubmit={onSubmit}
            noValidate
          >
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
              {errors.email && (
                <p className="mb-0 text-danger">{errors.email}</p>
              )}
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
              {errors.password && (
                <p className="mb-0 text-danger">{errors.password}</p>
              )}
              <Link to="/ResetPassword">
                <button className="btn btn-link mt-2" type="button">
                  <h6>Forgot the password?</h6>
                </button>
              </Link>
            </div>
            {errors.detail && (
              <p className="mb-0 text-danger">{errors.detail}</p>
            )}
            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <button
                className="btn btn-primary mt-4 w-100 fw-bold fs-5"
                type="submit"
              >
                Login
              </button>
            )}
          </form>
            <GoogleLogin
              className="mt-4 fw-bold fs-5"
              clientId={clientID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              buttonText="Sign in with Google"
              cookiePolicy={"single_host_origin"}
            />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
