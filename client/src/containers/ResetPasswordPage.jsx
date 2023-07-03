import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../components/Redux/user';

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.userdb)
  const [email, setEmail] = useState({
    email: ''
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({email}));
  };

  return (
    <div className="container">
      <h1 className="mt-5">Hello!</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="form-control"
            required
          />
        </div>
        {
          loading ? (
            <div className='spinner-border text-primary' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				) : (
          <button type="submit" className="btn btn-primary">Reset Password</button>
        )}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
