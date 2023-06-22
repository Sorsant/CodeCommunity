import React, { useState } from 'react';
import validate from './validate';
import { useDispatch } from 'react-redux';
import { addRegister } from '../../components/Redux/Actions/Post/action-post';

const Register = () => {
    const dispatch = useDispatch();
    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setRegister({
            ...register,
            [name]: value,
        });

        const updatedErrors = validate({
            ...register,
            [name]: value,
        });

        setErrors(updatedErrors);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatch(addRegister(register));
    };

    return (
        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <label>My Username</label><br />
                        <input
                            onChange={handleOnChange}
                            value={register.username}
                            type="text"
                            name="username"
                            placeholder="Your username"
                        /><br />
                        {errors.username && <span>{errors.username}</span>}<br />
                        <label>Email</label><br />
                        <input
                            onChange={handleOnChange}
                            value={register.email}
                            type="email"
                            name="email"
                            placeholder="Your email"
                        /><br />
                        {errors.email && <span>{errors.email}</span>}<br />

                        <label>Password</label><br />
                        <input
                            onChange={handleOnChange}
                            value={register.password}
                            type="password"
                            name="password"
                            placeholder="Your password"
                        /><br />
                        {errors.password && <span>{errors.password}</span>}<br />
                        <label>Confirm password</label><br />
                        <input
                            onChange={handleOnChange}
                            value={register.confirmpassword}
                            type="password"
                            name="confirmpassword"
                            placeholder="Confirm your password"
                        /><br />
                        {errors.confirmpassword && <span>{errors.confirmpassword}</span>}<br />

                        <button
                            disabled={
                                !register.email ||
                                !register.password ||
                                !register.username ||
                                !register.confirmpassword ||
                                !!errors.email ||
                                !!errors.password ||
                                !!errors.username ||
                                !!errors.confirmpassword

                            }
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
