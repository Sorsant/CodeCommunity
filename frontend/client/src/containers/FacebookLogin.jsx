import React from "react";
import { useDispatch } from "react-redux";
import FacebookLogin from "react-facebook-login";
import { facebookLogin } from "../components/Redux/user";

const FacebookAuthButton = () => {
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    const { accessToken, userID } = response;
    dispatch(facebookLogin({ accessToken, userID }));
  };

  return (
    <FacebookLogin
      appId="820451609609693"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      icon="fa-facebook"
    />
  );
};

export default FacebookAuthButton;
