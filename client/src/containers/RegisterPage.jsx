import { useEffect, useState } from 'react';
import Layout from './Layout';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, googleRegister } from '../components/Redux/user';
import { clientID } from "../config";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { registered, loading, errors } = useSelector(state => state.userdb);
	const [auth, setAuth] = useState(false)
	const [userGoogle, setUserGoogle] = useState({})

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: '',
  });

	const onSuccess = (response) => {
    setUserGoogle(response.profileObj);
    setAuth(true);
    document.getElementsByClassName("btn").hidden = true;
  }
  
  const onFailure = (response) => {
    console.log("Something went wrong");
  }
  
  if(auth === true){
    dispatch(googleRegister({userGoogle}));
  }

	useEffect(() => {
		function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
	}, [])

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
			<div className='container d-flex justify-content-center align-items-center mt-4'>
				<div className='card bg-dark text-light rounded-lg p-5'>
					<h1 className='text-center p-1 px-3'>Register for an Account</h1>
					<form onSubmit={onSubmit} className='needs-validation' noValidate>
						<div className='form-group mb-2'>
							<label htmlFor='first_name'>First Name</label>
							<input
								className='form-control form-control-lg'
								type='text'
								name='first_name'
								onChange={onChange}
								value={first_name}
								required
							/>
							{ errors.first_name && ( <p className="mb-0 text-danger">{errors.first_name}</p> )}
						</div>
						<div className='form-group mb-2'>
							<label htmlFor='last_name'>Last Name</label>
							<input
								className='form-control form-control-lg'
								type='text'
								name='last_name'
								onChange={onChange}
								value={last_name}
								required
							/>
							{ errors.last_name && ( <p className="mb-0 text-danger">{errors.last_name}</p> )}
						</div>
						<div className='form-group mb-2'>
							<label htmlFor='email'>Email</label>
							<input
								className='form-control form-control-lg'
								type='email'
								name='email'
								onChange={onChange}
								value={email}
								required
							/>
							{ errors.email && ( <p className="mb-0 text-danger">{errors.email}</p> )}
						</div>
						<div className='form-group mb-2'>
							<label htmlFor='password'>Password</label>
							<input
								className='form-control form-control-lg'
								type='password'
								name='password'
								onChange={onChange}
								value={password}
								required
							/>
							{ errors.password && ( <p className="mb-0 text-danger">{errors.password}</p> )}
						</div>
						<div className='form-group mb-2'>
							<label htmlFor='re_password'>Confirm Password</label>
							<input
								className='form-control form-control-lg'
								type='password'
								name='re_password'
								onChange={onChange}
								value={re_password}
								required
							/>
							{ errors.re_password && ( <p className="mb-0 text-danger">{errors.re_password}</p> )}
							{ errors.non_field_errors && ( <p className="mb-0 text-danger">{errors.non_field_errors}</p> )}
						</div>
						{loading ? (
							<div className="d-flex justify-content-center">
								<div className="spinner-border text-primary" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							</div>
						) : (
							<button className="btn btn-primary mt-4 w-100 rounded-pill fw-bold fs-5" type="submit">Register</button>
						)}
					</form>
					<GoogleLogin
							className="mt-4 fw-bold fs-5"
              clientId={clientID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              buttonText="Continue  with Google"
              cookiePolicy={"single_host_origin"}
            />
				</div>
			</div>
		</Layout>
	);	
};

export default RegisterPage;
