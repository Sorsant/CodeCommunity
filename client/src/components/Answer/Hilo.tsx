import React from 'react';
import styles from './hilo.module.css'

type ThreadProps = {
    threadId: string;
    tweets: string[];
    addTweet: (threadId: string, tweet: string) => void;
};

const Thread: React.FC<ThreadProps> = ({ threadId, tweets, addTweet }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const input = event.currentTarget.elements[0] as HTMLInputElement;
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
};

export default Thread;
