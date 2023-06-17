import React, { useState } from 'react';
import validate from './validatePost';

interface FormPost {

    title: string;
    description: string;
    image: string;

}

interface ErroresRegister {

    title?: string;
    description?: string;
    image?: string;

}

const Posteohome: React.FC = (): JSX.Element => {


    const [post, setPost] = useState<FormPost>({
        image: '',
        title: '',
        description: '',
    });

    const [errors, setErrors] = useState<ErroresRegister>({
        image: '',
        title: '',
        description: '',
    });


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (

        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <div></div>
                        <label>Title</label>
                        <input
                            onChange={handleOnChange}
                            value={post.title}
                            type="text"
                            name="titulo"
                            placeholder="your title"
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
                            type="image"
                            name="imagen"
                        />
                        {errors.image && <span>{errors.image}</span>}


                        <button
                            disabled={
                                !post.title ||
                                !post.description ||
                                !errors.title ||
                                !!errors.description
                            }>
                            post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Posteohome;
