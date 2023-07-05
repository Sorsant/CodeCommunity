import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../components/Redux/user";
import Layout from "./Layout";

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userdb);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email }));
  };

  return (
    <Layout>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card bg-dark text-light rounded-lg p-5">
          <h1 className="text-center mb-3">Reset Password</h1>
          <h5 className="text-center">Verify your email for reset password</h5>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="form-control form-control-lg"
                required
              />
            </div>
            {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            ) : (
              <button className="btn btn-primary mt-4 w-100 rounded-pill fw-bold fs-5">Send</button>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPasswordPage;
