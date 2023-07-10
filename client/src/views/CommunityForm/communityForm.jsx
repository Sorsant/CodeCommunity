import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "./communityForm.module.css";
import { useState } from "react";
import { addCommunity } from "../../components/Redux/Actions/Community/ActionCommunity";
import { getAllLanguages } from "../../components/Redux/Actions/Community/ActionCommunity";
import validate from "./validate";
import { useDispatch, useSelector } from "react-redux";
import CloudinaryUploadWidget from "./CloudinaryWidget/CloudinaryUploadWidget";

const CommunityForm = () => {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.community.languages.data);

  const [inputValues, setInputValues] = useState({
    name: "",
    description: "",
    image: "",
    language: [],
    created: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    language: [],
    image: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Created Community");
    setInputValues({ ...inputValues, created: new Date().toISOString() });
    dispatch(addCommunity(inputValues));
    setInputValues({
      name: "",
      description: "",
      language: [],
      image: "",
    });
  };

  const handleImageUrl = (secureUrl) => {
    setInputValues({
      ...inputValues,
      image: secureUrl,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });

    const messageErrors = validate({
      ...inputValues,
      [name]: value,
    });

    setErrors(messageErrors);
  };

  const handleChangeOption = (event) => {
    const selectedLanguageIds = Array.from(
      event.target.selectedOptions,
      (option) => Number(option.value)
    );
    setInputValues({ ...inputValues, language: selectedLanguageIds });
  };

  const disabled =
    !inputValues.name || !inputValues.description || !inputValues.image;
  useEffect(() => {
    dispatch(getAllLanguages());
  }, [dispatch]);

  return (
    <div className={classNames(styles["container-community"], "d-flex align-items-center justify-content-center")}>
      <div className={styles.card}>
        <div className={styles.cardbody}>
          {console.log(inputValues)}
          <form className={styles.form}>
            <div className={classNames("form-group", styles["form-group"])}>
              <h2>Create Group</h2>

              <input
                onChange={handleChange}
                value={inputValues.name}
                className={styles.formcontrol}
                style={{ marginBottom: '20px' }}
                type="text"
                name="name"
                placeholder="Name your group"
              />
              {errors.name && <span>{errors.name}</span>}

              <input
                onChange={handleChange}
                value={inputValues.description}
                className={styles.formcontrol}
                style={{ marginBottom: '20px' }}
                type="text"
                name="description"
                placeholder="Describe your group"
              />
              {errors.description && <span>{errors.description}</span>}

              <label htmlFor="languages">Languages:</label>

              <select
                onChange={handleChangeOption}
                name="language"
                style={{ marginBottom: '20px' }}
                value={inputValues.language}
                className={styles.formcontrol}
              >
                {languages &&
                  languages.map((lan) => (
                    <option
                      className="opciones"
                      value={lan.id}
                      key={lan.id}
                      selected={inputValues.language.includes(lan.id)}
                    >
                      {lan.name}
                    </option>
                  ))}
              </select>
              {errors.language && <span>{errors.language}</span>}

              <label>Image</label>
              <div className={classNames(styles.uploadimage)} style={{ marginBottom: '20px' }}>
                <CloudinaryUploadWidget onImageUrl={handleImageUrl} />
              </div>

              <button
  disabled={disabled}
  onClick={handleSubmit}
  style={{ marginBottom: '20px' }}
  className={classNames("btn btn-primary", styles.button)}
>
  Create
</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunityForm;
