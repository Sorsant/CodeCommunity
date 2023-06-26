import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset_password_confirm } from '../../src/components/Redux/Actions/test/auth';

const ResetPasswordConfirm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { uid, token } = useParams();
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        newPassword: '',
        reNewPassword: ''
    });

    const { newPassword, reNewPassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        dispatch(reset_password_confirm(uid, token, newPassword, reNewPassword));
        setRequestSent(true);
    };

    if (requestSent) {
        navigate('/');
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='New Password'
                        name='newPassword'
                        value={newPassword}
                        onChange={onChange}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm New Password'
                        name='reNewPassword'
                        value={reNewPassword}
                        onChange={onChange}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPasswordConfirm;
