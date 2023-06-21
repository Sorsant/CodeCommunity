import React, { useState, useEffect } from 'react';
import validate from './validate';
import { useDispatch, useSelector } from 'react-redux';
import { postUser, getAllLanguages } from '../../components/Redux/action';

const Register = () => {

    const dispatch = useDispatch();
    const languages = useSelector((state) => state.languages);

    useEffect(() => {
        dispatch(getAllLanguages())
    }, [dispatch]);

    const [register, setRegister] = useState({
        name: '',
        user_image: '',
        password: '',
        nickname: '',
        lastname: '',
        birthday: '',
        email: '',
        language: [],
        community: []
    });

    const [errors, setErrors] = useState({
        name: '',
        user_image: '',
        password: '',
        nickname: '',
        lastname: '',
        birthday: '',
        email: '',
        language: '',
        community: ''
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

        dispatch(postUser(register));

    };

    const handleChangeOption = (event) => {

        const { name, value } = event.target;

        setRegister({
            ...register,
            [name]: [value]
        })

        const messageErrors = validate({
            ...register,
            [name]: value
        })

        setErrors(messageErrors);
    }

    return (
        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <div>

                        <label>User Image</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.user_image}
                            type="text"
                            name="user_image"
                            placeholder="Image URL"
                        />
                        {/*Revisar validaciones, agregar validacion de imagen de usuario*/}

                        <label>Name</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.name}
                            type="text"
                            name="name"
                            placeholder="Name"
                        />
                        {errors.name && <span>{errors.name}</span>}

                        <label>Lastname</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.lastname}
                            type="text"
                            name="lastname"
                            placeholder="Lastname"
                        />
                        {errors.lastname && <span>{errors.lastname}</span>}

                        <label>My nickname</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.nickname}
                            type="text"
                            name="nickname" // Corrected: use "nickname" instead of "name"
                            placeholder="Your nickname"
                        />
                        {errors.nickname && <span>{errors.nickname}</span>}

                        <label>Email</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.email}
                            type="email"
                            name="email"
                            placeholder="Your email"
                        />
                        {errors.email && <span>{errors.email}</span>}

                        <label>Birthday</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.birthday}
                            type="text"
                            name="birthday"
                            placeholder="dd/mm/aaaa"
                        />
                        {/*Hacer validaciones de cumpleaños*/}

                        <label>Password</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.password}
                            type="password"
                            name="password"
                            placeholder="Your password"
                        />
                        {errors.password && <span>{errors.password}</span>}

                        <select onChange={event => {handleChangeOption(event)}}>

                        <option>Select Language</option>
                        {
                            languages?.map(e => {
                                return (
                                    <option key={e.id} value={e.id} name={languages}>{e.name}</option>
                                )
                            })
                        }
                        </select>
                        {/*Hacer validaciones para el select de Languages*/}

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
