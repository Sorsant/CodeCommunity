import React, { useState } from 'react';
import validate from './validatePost';
import { useDispatch } from 'react-redux';
import { addHomePosts } from '../../../components/Redux/Actions/Post/action-post';


const Posteohome = () => {
    const dispatch = useDispatch();

    const [post, setPost] = useState({
        image: '',
        title: '',
        description: '',
        user:""
    });

    const [errors, setErrors] = useState({
        image: '',
        title: '',
        description: '',
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setPost({
            ...post,
            [name]: value,
        });

        const updatedErrors = validate({
            ...post,
            [name]: value,
        });

        setErrors(updatedErrors);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        dispatch(addHomePosts(post));
    };

    return (
        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                {console.log(post)}
                    <div>
                        <div></div>
                        <label>Title</label>
                        <input
                            onChange={handleOnChange}
                            value={post.title}
                            type="text"
                            name="title"
                            placeholder="Your title"
                        />
                        {errors.title && <span>{errors.title}</span>}

                        <label>Description</label>
                        <input
                            onChange={handleOnChange}
                            value={post.description}
                            type="text"
                            name="description"
                            placeholder=""
                        />
                        {errors.description && <span>{errors.description}</span>}

                        <label>Image</label>
                        <input
                            onChange={handleOnChange}
                            value={post.image}
                            type="text"
                            name="image"
                        />
                        {errors.image && <span>{errors.image}</span>}
                        
                        <label>user</label>
                        <input
                            onChange={handleOnChange}
                            value={post.user}
                            type="text"
                            name="user"
                        />

                        <button
                            disabled={
                                !post.title ||
                                !post.description ||
                                !!errors.title ||
                                !!errors.description
                            }
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Posteohome;
