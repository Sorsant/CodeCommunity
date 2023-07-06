import style from "./profile.module.css";
import imagen from "./default.png";
import {ProductDisplay} from "../../components/Payment/payment";
import { useDispatch, useSelector } from "react-redux";
import { ImgEdit } from "../../components/Redux/Actions/ActionHome";
import CloudinaryUploadWidget from "./CloudinaryWidget/cloudinary";
import ModalForm from "./FromEdit/ModalEdit";

const Profile = () => {
  const user = useSelector((state) => state.userdb.user);
  const extras = useSelector((state) => state.home.userExtra);
  const extra = extras.find((users) => users.id === (user && user.id));
  const languages = useSelector((state) => state.community.languages.data);
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");

  const handleImageUrl = (secureUrl) => {
    dispatch(ImgEdit(id, secureUrl));
  };

  return (
    <div>
      <header className={style.header}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>Profile</h1>
          <ModalForm />
        </div>
      </header>
      <div className={style.containerButton}></div>

      <div className={style.profile}>
        <div className={style.profile_picture}>
          <CloudinaryUploadWidget onImageUrl={handleImageUrl} />
          {extra && extra.user_image ? (
            <img src={extra.user_image} alt="" />
          ) : (
            <img src={imagen} alt="" />
          )}
        </div>
        <div className={style.profile_info}>
          {extra && extra.premium ? (
            <div>
              <h1>Premium</h1>
            </div>
          ) : (
            <ProductDisplay />
          )}
          <h2 className={style.profile_name}>
            {user && user.first_name ? user.first_name : <p>loading...</p>}{" "}
            {user && user.last_name ? user.last_name : <p>loading...</p>}
          </h2>
          {extra &&
            extra.language &&
            extra.language.map((langu) => {
              const languageId = langu.toString();
              const language = Array.isArray(languages)
                ? languages.find((lang) => lang.id === +languageId)
                : null;
              const languageName = language?.name || "Unknown Language";

              return (
                <div className={style.div}>
                  <ul>
                    <li>{languageName}</li>
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
