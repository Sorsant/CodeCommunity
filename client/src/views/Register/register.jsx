import React, { useState, useEffect } from 'react';
import validate from './validate';
import { useDispatch, useSelector } from 'react-redux';
import { postUser, getAllLanguages } from '../../components/Redux/action';
import styles from "./register.module.css";

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
        <div className={styles.container}>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <div className={styles.containerForm}>

                        <label>User Image</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.user_image}
                            type="text"
                            name="user_image"
                            placeholder="Image URL"
                        />
                       
                        {/*Revisar validaciones, agregar validacion de imagen de usuario*/}
                    <div />
                    <div className={styles.containerForm}></div>
                        <label>Name</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.name}
                            type="text"
                            name="name"
                            placeholder="Name"
                        />
                        {errors.name && <span>{errors.name}</span>}
                    <div />
                    <div className={styles.containerForm}></div>
                        <label>Lastname</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.lastname}
                            type="text"
                            name="lastname"
                            placeholder="Lastname"
                        />
                        {errors.lastname && <span>{errors.lastname}</span>}
                    <div />
                    <div className={styles.containerForm}></div>
                        <label>My nickname</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.nickname}
                            type="text"
                            name="nickname" // Corrected: use "nickname" instead of "name"
                            placeholder="Your nickname"
                        />
                        {errors.nickname && <span>{errors.nickname}</span>}
                    <div />
                    <div className={styles.containerForm}></div>
                        <label>Email</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.email}
                            type="email"
                            name="email"
                            placeholder="Your email"
                        />
                        {errors.email && <span>{errors.email}</span>}
                    <div /> 
                    <div className={styles.containerForm}></div>
                        <label>Birthday</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.birthday}
                            type="text"
                            name="birthday"
                            placeholder="aaaa-mm-dd"
                        />
                        {/*Hacer validaciones de cumpleaños*/}
                    <div />
                    <div className={styles.containerForm}></div>
                        <label>Password</label>
                        <input
                            onChange={event => {handleOnChange(event)}}
                            value={register.password}
                            type="password"
                            name="password"
                            placeholder="Your password"
                        />
                        {errors.password && <span>{errors.password}</span>}
                    <div />
                    <div className={styles.containerForm}></div>
                        <select onChange={event => {handleChangeOption(event)}}>

                        <option>Select Language</option>
                        {
                            languages?.map(element => {
                                return (
                                    <option key={element.id} value={element.id} name={register.language}>{element.name}</option>
                                )
                            })
                        }
                        </select>
                        {/*Hacer validaciones para el select de Languages*/}
                    <div />
                    <div className={styles.containerForm}></div>
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
