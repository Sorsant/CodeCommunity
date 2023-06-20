import React, { useState } from 'react';
import validate from './validateProfile';

const Profileform = () => {
  const [profile, setProfile] = useState({
    user_image: '',
    birthday: '',
    language: [],
  });

  const [errors, setErrors] = useState({ birthday: '' });

  const handleOnChange = (event) => {
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

  const handleOnSubmit = (event) => {
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
              name="birthday"
            />
            {errors.birthday && <span>{errors.birthday}</span>}

            <label>Language</label>
            <input
              onChange={handleOnChange}
              value={profile.language}
              type="checkbox"
              name="language"
            />
            {/* {errors.language && <span>{errors.language}</span>} */}

            <label>Image</label>
            <input
              onChange={handleOnChange}
              value={profile.user_image}
              type="file"
              name="user_image"
            />
            {/* {errors.user_image && <span>{errors.user_image}</span>} */}

            <button
              disabled={!profile.birthday || !errors.birthday}
            >
              profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profileform;
