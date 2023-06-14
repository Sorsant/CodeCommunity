import React, { useState } from 'react';

import Thread from '../../components/Answer/Hilo';
import styles from './QandA.module.css'
import Posteo from './Form/Post';

const QandA: React.FC = () => {
    const [threads, setThreads] = useState<{ id: string; tweets: string[] }[]>([]);

    const addTweet = (threadId: string, tweet: string) => {
        setThreads(prevThreads =>
            prevThreads.map(thread =>
                thread.id === threadId ? { ...thread, tweets: [...thread.tweets, tweet] } : thread
            )
        );
    };

    const createThread = () => {
        const newThreadId = String(threads.length + 1);
        setThreads(prevThreads => [...prevThreads, { id: newThreadId, tweets: [] }]);
    };

    return (
        <div className={styles.divQA}>
            <h1>Q & A</h1>
            <Posteo onSubmit={function (title: string, content: string): void {
                throw new Error('Function not implemented.');
            }} />

            <button onClick={createThread} className={styles.crearHilo}>Crear nuevo hilo</button>

            {threads.map(thread => (
                <div>
                    <Thread key={thread.id} threadId={thread.id} tweets={thread.tweets} addTweet={addTweet} />
                </div>
            ))}

        </div>
    );
};


export default QandA;


