import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import { googleAuthenticate } from '../../src/components/Redux/Actions/test/auth';
const Google = () => {
    let location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State: ' + state);
        console.log('Code: ' + code);

        if (state && code) {
            dispatch(googleAuthenticate(state, code));
        }
    }, [location]);

    return (
        <div className='container'>
            <div class='jumbotron mt-5'>
                <h1 class='display-4'>Welcome to Auth System!</h1>
                <p class='lead'>This is an incredible authentication system with production level features!</p>
                <hr class='my-4' />
                <p>Click the Log In button</p>
                <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
            </div>
        </div>
    );
};

export default Google;
