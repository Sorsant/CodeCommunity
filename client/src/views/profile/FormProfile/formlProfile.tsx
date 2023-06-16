import React, { useState } from 'react';
import validate from './validateProfile';

interface FormProfile {
    // nickname: string;
    user_image: string;
    // name: string;
    // password: string;
    // lastname: string;
    birthday: string;
    // email: string;
    language: Array<string>;
    // community: string;
}

interface ErrorProfile {
    // nickname?: string;
    // user_image?: string;
    // password?: string;
    // name?: string;
    // lastname?: string;
    birthday?: string;
    // email?: string;
    // language?: Array<string>;
    // community?: string;

}

const Profileform: React.FC = (): JSX.Element => {


    const [profile, setProfile] = useState<FormProfile>({
        // nickname: '',
        user_image: '',
        // name: '',
        // lastname: '',
        birthday: '',
        // email: '',
        language: [],
        // community: [],

    });

    const [errors, setErrors] = useState<ErrorProfile>({
        // nickname: '',
        // user_image: '',
        // name: '',
        // lastname: '',
        birthday: '',
        // email: '',
        // language: [],
        // community: '',

    });


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setProfile({
            ...profile,
            [name]: value,
        });

        const updatedErrors = validate({
            ...profile,
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
                        <label>birthday:</label>
                        <input
                            onChange={handleOnChange}
                            value={profile.birthday}
                            type="date"
                            name="date"
                        // placeholder="your title"
                        />
                        {errors.birthday && <span>{errors.birthday}</span>}

                        <label>Language</label> // implementar  el map en  el language cuando back los mande para la seleccion de alguno de ellos
                        <input
                            onChange={handleOnChange}
                            value={profile.language}
                            type="checkbox"
                            name="checkbox"
                        // placeholder=""
                        />
                        {/* {errors.language && <span>{errors.language}</span>} */}

                        <label>Image</label>
                        <input
                            onChange={handleOnChange}
                            value={profile.user_image}
                            type="file"
                            name="image"
                        />
                        {/* {errors.image && <span>{errors.image}</span>} */}


                        <button
                            disabled={
                                !profile.birthday ||
                                !errors.birthday
                            }>
                            profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profileform;

