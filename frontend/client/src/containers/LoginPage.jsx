import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../components/Redux/user";
import { resetRegistered } from "../components/Redux/user";
import Layout from "../components/Layout";

const LoginPage = () => {
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
  }, [dispatch, registered]);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <Layout title="Auth Site | Login" content="Login page">
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
            <button
              className="btn btn-link mt-2"
              type="button"
            >
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
      </form>
    </Layout>
  );
};

export default LoginPage;
