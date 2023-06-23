import React, { useEffect } from "react";
import styles from "./communityForm.module.css";
import { useState } from "react";
import { addCommunity } from '../../components/Redux/Actions/Post/action-post';
import { getAllLanguages } from "../../components/Redux/Actions/Get/action-get";
import validate from "./validate";
import { useDispatch, useSelector } from "react-redux";
import CommunityCard from "../Community/communityCards";

const CommunityForm = () => {
    const dispatch = useDispatch();
    const languages = useSelector((state => state.languages))

    const [inputValues, setInputValues] = useState({
        name: "",
        description: "",
        image: "",
        language: [],
        created: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        language: [],
        image: ""

    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValues({ ...inputValues, created: new Date().toISOString() });
        dispatch(addCommunity(inputValues));
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });

        const messageErrors = validate({
            ...inputValues,
            [name]: value
        });

        setErrors(messageErrors);
    };

    const handleChangeOption = (event) => {
        const selectedLanguageIds = Array.from(event.target.selectedOptions, (option) => Number(option.value));
        setInputValues({ ...inputValues, language: selectedLanguageIds });
    }

    const disabled =
        !inputValues.name ||
        !inputValues.description;

    useEffect(() => {
        dispatch(getAllLanguages());
    }, [dispatch]);

    return (
        <div>
            <div className={styles.container}>
                {console.log(inputValues)}
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Create Group</h2>

                    <input
                        onChange={handleChange}
                        value={inputValues.name}
                        className={styles.data}
                        type="text"
                        name="name"
                        placeholder="Name your group"
                    />
                    {errors.name && <span>{errors.name}</span>}

                    <input
                        onChange={handleChange}
                        value={inputValues.description}
                        className={styles.data}
                        type="text"
                        name="description"
                        placeholder="Describe your group"
                    />
                    {errors.description && <span>{errors.description}</span>}

                    <input
                        onChange={handleChange}
                        value={inputValues.image}
                        className={styles.data}
                        type="text"
                        name="image"
                        placeholder="Put an image"
                    />
                    {errors.description && <span>{errors.description}</span>}

                    <label htmlFor="languages">Languages:</label>

                    <select
                        onChange={handleChangeOption}
                        name="language"
                        value={inputValues.language}
                    >
                        {languages.map((lan) => (
                            <option
                                className={styles.opciones}
                                value={lan.id}
                                key={lan.id}
                                selected={inputValues.language.includes(lan.id)} // Verificamos si el ID del lenguaje está en el array de lenguajes seleccionados
                            >
                                {lan.name}
                            </option>
                        ))}
                    </select>
                    {errors.language && <span>{errors.language}</span>}

                    <button disabled={disabled}>Create</button>
                </form>
            </div>
            <div className={styles.communityCardContainer}>
                <CommunityCard />
            </div>
        </div>
    );
};

export default CommunityForm;
