import style from "./profile.module.css";
import imagen from "./default.png";
import { ProductDisplay } from "../../components/Payment/payment";
import { useDispatch, useSelector } from "react-redux";
import { ImgEdit } from "../../components/Redux/Actions/ActionHome";
import CloudinaryUploadWidget from "./CloudinaryWidget/cloudinary";
import ModalForm from "./FromEdit/ModalEdit";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pay } from "../../components/Redux/Actions/User/actionUser";
import QueryString from "query-string";

const Profile = () => {
  const user = useSelector((state) => state.userdb.user);
  const extras = useSelector((state) => state.home.userExtra);
  const extra = extras?.find((users) => users.id === (user && user.id));
  const languages = useSelector((state) => state.community.languages.data);
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  console.log(languages);

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
    <div className={style.container}>
      <div className={style.card}>
        <div class={style.card_img}><svg xmlns="http://www.w3.org/2000/svg" width="600px"><rect fill="#ffffff" width="540" height="450"></rect><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%" gradientTransform="rotate(222,648,379)"><stop offset="0" stop-color="#ffffff"></stop><stop offset="1" stop-color="#FC726"></stop></linearGradient><pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0" viewBox="0 0 1080 900"><g fill-opacity="0.5"><polygon fill="#444" points="90 150 0 300 180 300"></polygon><polygon points="90 150 180 0 0 0"></polygon><polygon fill="#AAA" points="270 150 360 0 180 0"></polygon><polygon fill="#DDD" points="450 150 360 300 540 300"></polygon><polygon fill="#999" points="450 150 540 0 360 0"></polygon><polygon points="630 150 540 300 720 300"></polygon><polygon fill="#DDD" points="630 150 720 0 540 0"></polygon><polygon fill="#444" points="810 150 720 300 900 300"></polygon><polygon fill="#FFF" points="810 150 900 0 720 0"></polygon><polygon fill="#DDD" points="990 150 900 300 1080 300"></polygon><polygon fill="#444" points="990 150 1080 0 900 0"></polygon><polygon fill="#DDD" points="90 450 0 600 180 600"></polygon><polygon points="90 450 180 300 0 300"></polygon><polygon fill="#666" points="270 450 180 600 360 600"></polygon><polygon fill="#AAA" points="270 450 360 300 180 300"></polygon><polygon fill="#DDD" points="450 450 360 600 540 600"></polygon><polygon fill="#999" points="450 450 540 300 360 300"></polygon><polygon fill="#999" points="630 450 540 600 720 600"></polygon><polygon fill="#FFF" points="630 450 720 300 540 300"></polygon><polygon points="810 450 720 600 900 600"></polygon><polygon fill="#DDD" points="810 450 900 300 720 300"></polygon><polygon fill="#AAA" points="990 450 900 600 1080 600"></polygon><polygon fill="#444" points="990 450 1080 300 900 300"></polygon><polygon fill="#222" points="90 750 0 900 180 900"></polygon><polygon points="270 750 180 900 360 900"></polygon><polygon fill="#DDD" points="270 750 360 600 180 600"></polygon><polygon points="450 750 540 600 360 600"></polygon><polygon points="630 750 540 900 720 900"></polygon><polygon fill="#444" points="630 750 720 600 540 600"></polygon><polygon fill="#AAA" points="810 750 720 900 900 900"></polygon><polygon fill="#666" points="810 750 900 600 720 600"></polygon><polygon fill="#999" points="990 750 900 900 1080 900"></polygon><polygon fill="#999" points="180 0 90 150 270 150"></polygon><polygon fill="#444" points="360 0 270 150 450 150"></polygon><polygon fill="#FFF" points="540 0 450 150 630 150"></polygon><polygon points="900 0 810 150 990 150"></polygon><polygon fill="#222" points="0 300 -90 450 90 450"></polygon><polygon fill="#FFF" points="0 300 90 150 -90 150"></polygon><polygon fill="#FFF" points="180 300 90 450 270 450"></polygon><polygon fill="#666" points="180 300 270 150 90 150"></polygon><polygon fill="#222" points="360 300 270 450 450 450"></polygon><polygon fill="#FFF" points="360 300 450 150 270 150"></polygon><polygon fill="#444" points="540 300 450 450 630 450"></polygon><polygon fill="#222" points="540 300 630 150 450 150"></polygon><polygon fill="#AAA" points="720 300 630 450 810 450"></polygon><polygon fill="#666" points="720 300 810 150 630 150"></polygon><polygon fill="#FFF" points="900 300 810 450 990 450"></polygon><polygon fill="#999" points="900 300 990 150 810 150"></polygon><polygon points="0 600 -90 750 90 750"></polygon><polygon fill="#666" points="0 600 90 450 -90 450"></polygon><polygon fill="#AAA" points="180 600 90 750 270 750"></polygon><polygon fill="#444" points="180 600 270 450 90 450"></polygon><polygon fill="#444" points="360 600 270 750 450 750"></polygon><polygon fill="#999" points="360 600 450 450 270 450"></polygon><polygon fill="#666" points="540 600 630 450 450 450"></polygon><polygon fill="#222" points="720 600 630 750 810 750"></polygon><polygon fill="#FFF" points="900 600 810 750 990 750"></polygon><polygon fill="#222" points="900 600 990 450 810 450"></polygon><polygon fill="#DDD" points="0 900 90 750 -90 750"></polygon><polygon fill="#444" points="180 900 270 750 90 750"></polygon><polygon fill="#FFF" points="360 900 450 750 270 750"></polygon><polygon fill="#AAA" points="540 900 630 750 450 750"></polygon><polygon fill="#FFF" points="720 900 810 750 630 750"></polygon><polygon fill="#222" points="900 900 990 750 810 750"></polygon><polygon fill="#222" points="1080 300 990 450 1170 450"></polygon><polygon fill="#FFF" points="1080 300 1170 150 990 150"></polygon><polygon points="1080 600 990 750 1170 750"></polygon><polygon fill="#666" points="1080 600 1170 450 990 450"></polygon><polygon fill="#DDD" points="1080 900 1170 750 990 750"></polygon></g></pattern></defs><rect x="0" y="0" fill="url(#a)" width="100%" height="100%"></rect><rect x="0" y="0" fill="url(#b)" width="100%" height="100%"></rect></svg></div>
        <div className={style.edit}><ModalForm /></div>
        <header className={style.header}>
          {extra && extra.premium ? (
            <div>
              <h1 className={style.premium}>Premium ⭐</h1>
            </div>
          ) : (
            <ProductDisplay />
          )}
        </header>
        <h2 className={style.card__title}>
          {user && user.first_name ? user.first_name : <p>loading...</p>}{" "}
          {user && user.last_name ? user.last_name : <p>loading...</p>}
        </h2>
        <div className={style.containerPremio}>
          <img
            src="https://i.ibb.co/p3Bcrwr/idea.png"
            className={style.premio}
            alt="premio por ser premium"
          />
          <img
            src="https://i.ibb.co/DbQbB2B/viejo.png"
            className={style.premio}
            alt="premio por su primer posteo"
          />
          <img
            src="https://i.ibb.co/S0VKwSm/grupo.png"
            className={style.premio}
            alt="premio por su primera comunidad"
          />
        </div>
        {extra &&
          extra.language &&
          extra.language.map((langu) => {
            const languageId = langu.toString();
            const language = Array.isArray(languages)
              ? languages?.find((lang) => lang.id === +languageId)
              : null;
            const languageName = language?.name || "Unknown Language";

            return (
              <div className={style.language}>
                <ul>
                  <li>{languageName}</li>
                </ul>
              </div>
            );
          })}

        <div className={style.profile_picture}>
          <div className={style.cloudinary}>
            <CloudinaryUploadWidget onImageUrl={handleImageUrl} />
          </div>
          {extra && extra.user_image ? (
            <div class={style.card__avatar}><img src={extra.user_image} alt="" /></div>
          ) : (
            <img src={imagen} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;