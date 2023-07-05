import { useState } from 'react';
import Layout from './Layout';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../components/Redux/user';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { registered, loading } = useSelector(state => state.userdb);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: '',
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    dispatch(register({ first_name, last_name, email, password, re_password }));
  };

  if (registered) return <Navigate to='/login' />;

  return (
		<Layout title='Auth Site | Register' content='Register page'>
			<div className='container d-flex justify-content-center align-items-center'>
				<div className='card bg-dark text-light rounded-lg p-5'>
					<h1 className='text-center p-3'>Register for an Account</h1>
					<form onSubmit={onSubmit}>
						<div className='form-group mb-3'>
							<label htmlFor='first_name'>First Name</label>
							<input
								className='form-control form-control-lg'
								type='text'
								name='first_name'
								onChange={onChange}
								value={first_name}
								required
							/>
						</div>
						<div className='form-group mb-3'>
							<label htmlFor='last_name'>Last Name</label>
							<input
								className='form-control form-control-lg'
								type='text'
								name='last_name'
								onChange={onChange}
								value={last_name}
								required
							/>
						</div>
						<div className='form-group mb-3'>
							<label htmlFor='email'>Email</label>
							<input
								className='form-control form-control-lg'
								type='email'
								name='email'
								onChange={onChange}
								value={email}
								required
							/>
						</div>
						<div className='form-group mb-3'>
							<label htmlFor='password'>Password</label>
							<input
								className='form-control form-control-lg'
								type='password'
								name='password'
								onChange={onChange}
								value={password}
								required
							/>
						</div>
						<div className='form-group mb-3'>
							<label htmlFor='re_password'>Confirm Password</label>
							<input
								className='form-control form-control-lg'
								type='password'
								name='re_password'
								onChange={onChange}
								value={re_password}
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
							<button className="btn btn-primary mt-4 w-100 rounded-pill fw-bold fs-5">Register</button>
						)}
					</form>
				</div>
			</div>
		</Layout>
	);	
};

export default RegisterPage;
