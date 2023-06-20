import React from "react";
import styles from "./communityForm.module.css";
import { useState } from "react";
import validate from "./validate";

const CommunityForm = () => {

    const [ inputValues, setInputValues ] = useState({
        name: "",
        description: "",
        language: "",
      //  image: ""
    })

    const [ errors, setErrors ] = useState({
        name: "",
        description: "",
        language: "",
      //  image: ""
    })

    const handleSubmit = (/*event: React.FormEvent<HTMLFormElement>*/) => {
        //event.preventDefault();  
    };

    const handleChange = (event) => { 
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        })

        const messageErrors = validate({
            ...inputValues,
            [event.target.name]: event.target.value
        })

        setErrors(messageErrors);
    }

    const handleChangeOption = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        })

        const messageErrors = validate({
            ...inputValues,
            [event.target.name]: event.target.value
        })

        setErrors(messageErrors);
    }

    const disabled = !inputValues.name || !inputValues.description || !inputValues.language /*|| !inputValues.image;*/

    return (
        <div className={styles.container}>

            <form className={styles.form} onSubmit={handleSubmit}>
                
                <h2>Create Group</h2>
                
                <input onChange={handleChange} value={inputValues.name} className={styles.data} type="text" name="name" placeholder="Name your group"/>
                {errors.name && <span>{errors.name}</span>}
                
                <input onChange={handleChange} value={inputValues.description} className={styles.data} type="text" name="description" placeholder="Descript your group"/>
                {errors.description && <span>{errors.description}</span>}
                
                <select onChange={handleChangeOption} value={inputValues.language} className={styles.data} name="language">
                    
                    <option value="">Language</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Typescript">Typescript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="Go">Go</option>
                    <option value="R">R</option>
                    <option value="Swift">Swift</option>
                
                </select>
                {errors.language && <span>{errors.language}</span>}
                
                <button disabled={disabled}>Create</button>
            
            </form>
        
        </div>
    )
}

export default CommunityForm;