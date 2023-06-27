import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getUserExtra, getAllLanguages } from '../../components/Redux/Actions/Get/action-get';
import styles from "./Instructor.module.css";
import { Link } from 'react-router-dom';

const Instructor = () => {
  const users = useSelector(state => state.users);
  const userExtra = useSelector(state => state.userExtra);
  const languages = useSelector(state => state.languages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getUserExtra());
    dispatch(getAllLanguages());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Perfiles de Instructores</h1>

      <div className={styles.cardContainer}>
        {users.map((user) => {
          const extraUser = userExtra.find((extra) => extra.user === user.id);
          const languageIds = extraUser && extraUser.language;
          const userLanguages = languageIds && languageIds.map((languageId) => {
            return languages.find((lang) => lang.id === languageId);
          });

          if (extraUser && extraUser.postulation) {
            return (
              <div key={user.id} className={styles.card}>
                <div className={styles.userContainer}>
                  <h2>{user.first_name} {user.last_name}</h2>
                  <img src={extraUser.user_image} alt={user.name} className={styles.imagen} />
                </div>

                <div className={styles.languageContainer}>
                  <h3>language:</h3>
                  {userLanguages && (
                    <ul>
                      {userLanguages.map((language) => (
                        <li key={language.id}>{language.name}</li>
                      ))}
                    </ul>
                  )}
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
