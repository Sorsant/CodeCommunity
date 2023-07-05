import style from "./profile.module.css";
import imagen from "./default.png";
import { ProductDisplay } from "../../components/Payment/payment";
import { useDispatch, useSelector } from "react-redux";
import { ImgEdit } from "../../components/Redux/Actions/ActionHome";
import CloudinaryUploadWidget from "./CloudinaryWidget/cloudinary";
import ModalForm from "./FromEdit/ModalEdit";
import { useLocation } from "react-router-dom";
import QueryString from "query-string";
import { pay } from "../../components/Redux/Actions/User/actionUser";
import { useEffect } from "react";

const Profile = () => {
  const user = useSelector((state) => state.userdb.user);
  const extras = useSelector((state) => state.home.userExtra);
  const extra = extras.find((users) => users.id === (user && user.id));
  const languages = useSelector((state) => state.community.languages.data);
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  console.log(languages)


  const handleImageUrl = (secureUrl) => {
    dispatch(ImgEdit(id, secureUrl));
  };
  const location = useLocation();

  useEffect(() => {

    const values = QueryString.parse(location.search);

    if (values.success === "true") {
      dispatch(pay(extra?.id));
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (values.canceled) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [dispatch, extra?.id, location.search]);
  useEffect(() => {
    localStorage.setItem("loggedInUserId", JSON.stringify(user?.id));
    localStorage.setItem("loggedInUserId", JSON.stringify(extra?.language));
  }, [user, extra]);

  return (
    <div>
      <header className={style.header}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>Profile</h1>
        </div>
        <div className={style.containerButton}></div>
        {extra && extra.premium ? (
          <div>
            <h1>Premium</h1>
          </div>
        ) : (
          <ProductDisplay />
        )}

        <ModalForm />
      </header>

      <div className={style.profile}>
        <div className={style.profile_info}>
          <h2 className={style.profile_name}>
            {user && user.first_name ? user.first_name : <p>loading...</p>}{" "}
            {user && user.last_name ? user.last_name : <p>loading...</p>}
          </h2>
          {extra &&
            extra.language &&
            extra.language.map((langu) => {
              const languageId = langu.toString();
              const language = Array.isArray(languages)
                ? languages?.find((lang) => lang.id === +languageId)
                : null;
              const languageName = language?.name || "Unknown Language";
              console.log(language)

              return (
                <div className={style.div}>
                  <ul>
                    <li>{languageName}</li>
                  </ul>
                </div>
              );
            })}
        </div>
        <div className={style.profile_picture}>
          <CloudinaryUploadWidget onImageUrl={handleImageUrl} />
          {extra && extra.user_image ? (
            <img src={extra.user_image} alt="" />
          ) : (
            <img src={imagen} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
