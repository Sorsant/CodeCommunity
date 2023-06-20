<<<<<<< HEAD
import React from 'react';
import styles from './hilo.module.css'

const Thread = ({ threadId, tweets, addTweet }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const input = event.currentTarget.elements[0];
        const tweet = input.value.trim();

        if (tweet) {
            addTweet(threadId, tweet);
            input.value = '';
        }
    };

    return (
        <div className={styles.hilo}>
            {tweets.map((tweet, index) => (
                <div key={index}>
                    <div>{tweet}</div>
                </div>
            ))}

            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" placeholder="Nuevo tuit" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
=======
import styles from "./hilo.module.css";

const Thread = ({ threadId, tweets, addTweet }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.currentTarget.elements[0];
    const tweet = input.value.trim();

    if (tweet) {
      addTweet(threadId, tweet);
      input.value = "";
    }
  };

  return (
    <div className={styles.hilo}>
      {tweets.map((tweet, index) => (
        <div key={index}>
          <div>{tweet}</div>
        </div>
      ))}

      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Nuevo tuit" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
>>>>>>> e96a840c0743f54858805d7107237fc7c52accda
};

export default Thread;
