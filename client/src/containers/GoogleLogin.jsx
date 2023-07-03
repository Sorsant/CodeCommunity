import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googleAuthenticate } from '../components/Redux/user';

const Google = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    console.log('State: ' + state);
    console.log('Code: ' + code);

    if (state && code) {
        dispatch(googleAuthenticate({state, code}));
    }
  }, [location, dispatch]);

  return (
      <div className='container'>
        <div className='jumbotron mt-5'>
          <h1 className='display-4'>Welcome to Auth System!</h1>
          <p className='lead'>This is an incredible authentication system with production-level features!</p>
          <hr className='my-4' />
          <p>Click the Log In button</p>
          <Link className='btn btn-primary btn-lg' to='/home' role='button'>Login</Link>
        </div>
      </div>
  );
};

export default Google;
