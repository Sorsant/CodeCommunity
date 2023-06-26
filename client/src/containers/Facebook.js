import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { facebookAuthenticate } from '../components/Redux/Actions/test/auth';
import queryString from 'query-string';

const Facebook = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state || null;
        const code = values.code || null;

        console.log('State:', state);
        console.log('Code:', code);

        if (state && code) {
            dispatch(facebookAuthenticate(state, code));
        }
    }, [location, dispatch]);

    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <h1 className="display-4">Welcome to Auth System!</h1>
                <p className="lead">This is an incredible authentication system with production level features!</p>
                <hr className="my-4" />
                <p>Click the Log In button</p>
                <Link className="btn btn-primary btn-lg" to="/login" role="button">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Facebook;
