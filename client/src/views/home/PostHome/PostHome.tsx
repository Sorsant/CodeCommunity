import React, { useState } from 'react';
import validate from './validatePost';

interface FormPost {
    nickname: string;
    user_imagen: string;
    titulo: string;
    description: string;
    imagen: string;
    createDate: string;
}

interface ErroresRegister {
    nickname?: string;
    user_imagen?: string;
    titulo?: string;
    description?: string;
    imagen?: string;

}

const Posteohome: React.FC = (): JSX.Element => {
    const getCurrentDate = (): string => {
        const currentDate = new Date().toLocaleString();
        return currentDate;
    };


    const [post, setPost] = useState<FormPost>({
        nickname: '',
        user_imagen: '',
        imagen: '',
        titulo: '',
        description: '',
        createDate: getCurrentDate(),
    });

    const [errors, setErrors] = useState<ErroresRegister>({
        nickname: '',
        user_imagen: '',
        imagen: '',
        titulo: '',
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

    const lauti = "gato"

    return (

        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <div></div>
                        <label>Title</label>
                        <input
                            onChange={handleOnChange}
                            value={post.titulo}
                            type="text"
                            name="titulo"
                            placeholder="your title"
                        />
                        {errors.nickname && <span>{errors.nickname}</span>}

                        <label>Description</label>
                        <input
                            onChange={handleOnChange}
                            value={post.description}
                            type="text"
                            name="description"
                            placeholder=""
                        />
                        {errors.description && <span>{errors.description}</span>}

                        <label>Imagen</label>
                        <input
                            onChange={handleOnChange}
                            value={post.imagen}
                            type="image"
                            name="imagen"
                        />
                        {errors.imagen && <span>{errors.imagen}</span>}


                        <button
                            disabled={
                                !post.titulo ||
                                !post.description ||
                                !errors.titulo ||
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
