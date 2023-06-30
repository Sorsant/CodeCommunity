import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, getUserExtras } from "../../components/Redux/Actions/User/actionUser"
import { getAllLanguages } from '../../components/Redux/Actions/Community/ActionCommunity';
import styles from "./Instructor.module.css";
import { Link } from 'react-router-dom';

const Instructor = () => {
    const users = useSelector(state => state.home.users);
    const userExtra = useSelector(state => state.home.userExtra);
    // const languages = useSelector(state => state.community.languages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getUserExtras());
        dispatch(getAllLanguages());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <h1>Perfiles de Instructores</h1>
            {console.log(users)}
            {console.log(userExtra)}
            <div className={styles.cardContainer}>
                {users.map((user) => {
                
                    // const languageIds = extraUser && extraUser.language;
                    // const userLanguages = languageIds && languageIds.map((languageId) => {
                    //     return languages.find((lang) => lang.id === languageId);
                    // });

                    if (user && user.postulation) {
                        return (
                            <div key={user.id} className={styles.card}>
                                <div className={styles.userContainer}>
                                    <h2>{user.first_name} {user.last_name}</h2>
                                    <img src={user.user_image} alt={user.name} className={styles.imagen} />
                                </div>

                                <div className={styles.languageContainer}>
                                    <h3>language:</h3>
                                    {/* {userLanguages && (
                                        <ul>
                                            {userLanguages.map((language) => (
                                                <li key={language.id}>{language.name}</li>
                                            ))}
                                        </ul>
                                    )} */}
                                </div>

                                <div className={styles.buttonContainer}>
                                    <Link to="/postulacion">
                                        <button className={styles.largeText}>Puedes pagarle a este instructor</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    }

                    return null;
                })}
            </div>
        </div>
    );
};

export default Instructor;
