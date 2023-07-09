import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, getUserExtras, getReviews, getReviews_user } from "../../components/Redux/Actions/User/actionUser";
import { getAllLanguages } from '../../components/Redux/Actions/Community/ActionCommunity';
import styles from "./Instructor.module.css";
import { Link } from 'react-router-dom';
import ModalRange from './ModalRange'

const Instructor = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const users = useSelector(state => state.home.users);
  const user = useSelector(state => state.userdb.user);
  const userExtras = useSelector(state => state.home.userExtra);
  const getreview = useSelector(state => state.home.review);
  const getreview_user = useSelector(state => state.home.review_user);
  const languages = useSelector(state => state.community.languages.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUserExtras());
    dispatch(getAllLanguages());
    dispatch(getReviews_user());
    dispatch(getReviews())
  }, [dispatch]);

  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('El instructor se estará contactando con usted');

  const handleButton = (email) => {
    setRecipient(email);
  };
  ;
  const handleSend = () => {
    console.log("Recipient:", recipient);
    console.log("Message:", message);
    // ...
  };


  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i}>⭐</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }

    return stars;
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {users?.map((user) => {
          const extraUser = userExtras?.find((item) => item.id === user.id);
          const userReviews = getreview.filter((review) => review.reviews_id === user.id);
          const userComments = getreview.filter(
            (comment) => comment.reviews_id === user.id
          );

          if (extraUser && extraUser?.premium && extraUser.postulation) {
            const languageNames = extraUser?.language.map(languageId => {
              const language = languages?.find(lang => lang.id === languageId);
              return language ? language.name : '';
            });
            const totalReviews = userReviews.length;
            let totalRating = 0;
            let comments = [];

            for (let i = 0; i < totalReviews; i++) {
              totalRating += userReviews[i].review;
              const reviewComments = userComments.filter(
                (comment) => comment.reviews_id === userReviews[i].id
              );
              comments = comments.concat(reviewComments.map((comment) => comment.comment));
            }
            const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0;
            console.log(userReviews, "userReviews");
            console.log(userComments, "userComments");
            return (
              <div className={styles.card}>
                <div className={styles.card_img}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%">
                    <img src="" alt="" />
                    <rect fill="#22303a" width="540" height="450"></rect>
                    <rect fill="#22303a" width="540" height="450"></rect>
                    <text font-size="25" fontFamily="Orbitron, sans-serif" fontWeight="bold" fill="#fff" x="50%" y="50%" text-anchor="middle" dy="-1.00em">
                      Code Community
                    </text>
                    <br />
                    <text font-size="25" fontFamily="Orbitron, sans-serif" fontWeight="bold" fill="#fff" x="50%" y="50%" text-anchor="middle" dy="0.20em">
                      Instructor
                    </text>
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
                    Lenguages:
                    <br />
                  </h2>
                  {languageNames.map((languageName, index) => (
                    <h2 key={index} className={`${styles.info} info`}>{languageName}</h2>

                  ))}
                </div>
                {totalReviews > 0 && (
                  <div className={styles.card_reviews}>
                    <h2>Reviews:</h2>
                    <div>
                      <p>
                        Rating: {renderStars(averageRating)}
                        <br />
                        Comments:
                        {comments.map((comment, index) => (
                          <span key={index}>
                            {comment}
                            {index !== comments.length - 1 && ", "}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                )}
                <div className={styles.card__wrapper}>
                  <button
                    onClick={() => handleButton(user.email)}
                    className={`${styles.button} largeText`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <span>You can contact this instructor</span>
                  </button>
                  <ModalRange reviews_id={user.id} />
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Contact</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="recipient" className="form-label">Receiver:</label>
                <input type="text" className="form-control" id="recipient" value={recipient} readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea className="form-control" id="message" rows="4" value={message} readOnly></textarea>
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
