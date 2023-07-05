import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, getUserExtras } from "../../components/Redux/Actions/User/actionUser";
import { getAllLanguages } from '../../components/Redux/Actions/Community/ActionCommunity';
import styles from "./Instructor.module.css";
import { Link } from 'react-router-dom';

const Instructor = () => {
  const users = useSelector(state => state.home.users);
  const userExtras = useSelector(state => state.home.userExtra);
  const languages = useSelector(state => state.community.languages.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUserExtras());
    dispatch(getAllLanguages());
  }, [dispatch]);

  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleButton = (email) => {
    setRecipient(email);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    console.log("Recipient:", recipient);
    console.log("Message:", message);
    // ...
  };

  return (
    <div className={styles.container}>
      <h1>Perfiles de Instructores</h1>
      <div className={styles.cardContainer}>
        {users.map((user) => {
          const extraUser = userExtras.find((item) => item.id === user.id);

          if (extraUser && extraUser.premium && extraUser.postulation) {
            const languageNames = extraUser.language.map(languageId => {
              const language = languages.find(lang => lang.id === languageId);
              return language ? language.name : '';
            });

            return (

              <div className={styles.card}>
                <div className={styles.card_img}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%">
                    <img src="" alt="" />
                    <rect fill="#22303a" width="540" height="450"></rect>
                    <rect fill="#22303a" width="540" height="450"></rect>
                    <text font-size="25" fontFamily='Orbitron, sans-serif' fontWeight="bold" fill="#fff" x="50%" y="50%" text-anchor="middle" dy="-1.00em">Code Community </text>
                    <br />
                    <text font-size="25" fontFamily='Orbitron, sans-serif' fontWeight="bold" fill=" #fff" x="50%" y="50%" text-anchor="middle" dy="0.20em">Instructor </text>
                  </svg>

                </div>
                <div className={styles.card_avatar}>
                  <img src={extraUser.user_image} alt={user.first_name} className={styles.img} />
                </div>
                <div className={styles.card_title}>
                  {user.first_name} {user.last_name}
                </div>
                <div className={styles.card_subtitle}>
                  <h2 className={`${styles.info} info`}>
                    Lenguajes:
                  </h2>
                  {languageNames.map((languageName, index) => (
                    <h2 key={index} className={`${styles.info} info`}>{languageName}</h2>
                  ))}
                </div>
                <div className={styles.card__wrapper}>
                  <button
                    onClick={() => handleButton(user.email)}
                    className={`${styles.button} largeText`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <span >Puedes contactar a este instructor</span>
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enviar mensaje</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="recipient" className="form-label">Destinatario:</label>
                <input type="text" className="form-control" id="recipient" value={recipient} readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje:</label>
                <textarea className="form-control" id="message" rows="4" value={message} onChange={handleMessageChange}></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={handleSend}>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
