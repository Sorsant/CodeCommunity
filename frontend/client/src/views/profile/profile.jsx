import style from "./profile.module.css";
import imagen from "./default.png";
import { Link } from "react-router-dom";
import { ProductDisplay } from "../../components/Payment/payment";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.userdb.user);
  const extras = useSelector((state) => state.home.userExtra);
  const extra = extras.find((users) => users.id === (user && user.id));
  return (
    <div>
      <header className={style.header}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>Profile</h1>
        </div>
        <div className={style.containerButton}>
          <Link to="/edit">
            <button className={style.edit}>Edit</button>
          </Link>
        </div>
        <ProductDisplay />
      </header>

      <div className={style.profile}>
        <div className={style.profile_info}>
          <h2 className={style.profile_name}>
            {user && user.first_name ? user.first_name : <p>loading...</p>}{" "}
            {user && user.last_name ? user.last_name : <p>loading...</p>}
          </h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>PostgresSQL</li>
          </ul>
          <p className={style.profile_description}>
            Si estas leyendo esto, sos un capo, sabelo
          </p>
        </div>
        <div className={style.profile_picture}>
          <img
            src={extra && extra.user_image ? extra.user_image : { imagen }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
