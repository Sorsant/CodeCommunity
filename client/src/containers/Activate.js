import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { verify } from '../components/Redux/Actions/test/auth';

const Activate = ({ match }) => {
    const [verified, setVerified] = useState(false);

    const navigate = useNavigate();
    const { uid, token } = match.params;
    const dispatch = useDispatch();

    const verifyAccount = () => {
        dispatch(verify(uid, token));
        setVerified(true);
    };

    useEffect(() => {
        if (verified) {
            navigate('/');
        }
    }, [verified, navigate]);

    return (
        <div className="container">
            <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ marginTop: '200px' }}
            >
                <h1>Verify your Account:</h1>
                <button
                    onClick={verifyAccount}
                    style={{ marginTop: '50px' }}
                    type="button"
                    className="btn btn-primary"
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

export default Activate;
