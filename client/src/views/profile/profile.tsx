import { useState } from "react";
import style from "./profile.module.css";
import imagen from "./default.png";

const Profile: React.FC = () => {
  const [info, setInfo] = useState({
    name: "name",
    image: "xd",
    description: "testing description",
  });
  return (
    <div>
      <header className={style.header}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>Profile</h1>
        </div>
        <div className={style.containerButton}>
          <button className={style.edit}>Edit</button>
        </div>
      </header>

      <div className={style.profile}>
        <div className={style.profile_info}>
          <h2 className={style.profile_name}>John Doe</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>PostgresSQL</li>
          </ul>
          <p className={style.profile_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            euismod arcu at bibendum.
          </p>
        </div>
        <div className={style.profile_picture}>
          <img src={imagen} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Profile;
