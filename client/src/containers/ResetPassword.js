import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset_password } from '../../src/components/Redux/Actions/test/auth';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [requestSent, setRequestSent] = useState(false);
    const [email, setEmail] = useState('');

    const onChange = e => setEmail(e.target.value);

    const onSubmit = e => {
        e.preventDefault();

        dispatch(reset_password(email));
        setRequestSent(true);
    };

    if (requestSent) {
        navigate('/');
    }

    return (
        <div className='container mt-5'>
            <h1>Request Password Reset:</h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;
