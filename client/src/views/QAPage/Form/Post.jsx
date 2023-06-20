import React, { useState } from 'react';
import styles from './post.module.css'


const PostForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(title, content);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.title}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className={styles.content}>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PostForm;