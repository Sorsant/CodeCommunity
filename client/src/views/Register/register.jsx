import React, { useState } from 'react';
import validate from './validate';
import { useDispatch } from 'react-redux';
import { addRegister } from '../../components/Redux/action';

const Register = () => {
    const dispatch = useDispatch();
    const [register, setRegister] = useState({
        nickname: '',
        name: '',
        lastname: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        nickname: '',
        name: '',
        lastname: '',
        email: '',
        password: '',
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
                        <label>My nickname</label>
                        <input
                            onChange={handleOnChange}
                            value={register.nickname}
                            type="text"
                            name="nickname" // Corrected: use "nickname" instead of "name"
                            placeholder="Your nickname"
                        />
                        {errors.nickname && <span>{errors.nickname}</span>}

                        <label>Name</label>
                        <input
                            onChange={handleOnChange}
                            value={register.name}
                            type="text"
                            name="name"
                            placeholder="Name"
                        />
                        {errors.name && <span>{errors.name}</span>}

                        <label>Lastname</label>
                        <input
                            onChange={handleOnChange}
                            value={register.lastname}
                            type="text"
                            name="lastname"
                            placeholder="Lastname"
                        />
                        {errors.lastname && <span>{errors.lastname}</span>}

                        <label>Email</label>
                        <input
                            onChange={handleOnChange}
                            value={register.email}
                            type="email"
                            name="email"
                            placeholder="Your email"
                        />
                        {errors.email && <span>{errors.email}</span>}

                        <label>Password</label>
                        <input
                            onChange={handleOnChange}
                            value={register.password}
                            type="password"
                            name="password"
                            placeholder="Your password"
                        />
                        {errors.password && <span>{errors.password}</span>}

                        <button
                            disabled={
                                !register.email ||
                                !register.password ||
                                !register.name ||
                                !register.lastname ||
                                !register.nickname ||
                                !!errors.email ||
                                !!errors.password ||
                                !!errors.lastname ||
                                !!errors.nickname ||
                                !!errors.name
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
