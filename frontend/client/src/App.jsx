import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./views/home/home";
import "./App.css";
import React from "react";
import LandingPage from "./views/landing/landing";
import Nav from "./views/Nav/nav";
import QandA from "./views/QAPage/QAPage";
// import Register from "./views/Register/register";
import Profile from "./views/profile/profile";
import CommunityForm from "./views/CommunityForm/communityForm";
import Edit from "./views/profile/edit";
import PostDetail from "./views/detail/detail";
import NewsPost from "./components/News Post/NewsPost";
// import Books from "./views/Education/Books/books";
import Books from "./views/Education/Books/books";
import Footer from "./views/Footer/footer";
import About from "./views/About/about";
import Instructor from "./views/Instructor/instructor";
import DetailCommunity from "./views/DetailCommunity/detailCommunity";
import FakeHome from "./views/FakeHome/fakeHome";
import GoogleLogin from './containers/GoogleLogin';
import DashboardPage from './containers/DashboardPage';
import ResetPasswordPage from "./containers/ResetPasswordPage";
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import { checkAuth } from './components/Redux/user';
import { getUser } from "./components/Redux/user";
import { getUserExtras } from "./components/Redux/Actions/User/actionUser";
import { getAllLanguages } from "./components/Redux/Actions/Community/ActionCommunity";

axios.defaults.baseURL = "https://codecommunity-production.up.railway.app/";

const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.userdb);
  useEffect(() => {
    dispatch(checkAuth());
    dispatch(getUser());
    dispatch(getAllLanguages());
    dispatch(getUserExtras());
  }, [dispatch]);

  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" ? <Nav /> : null}


      {isAuthenticated ? (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/communities/:id" element={<DetailCommunity />} />
          <Route path="/groups/:name" element={<DetailCommunity />} />
          <Route path="/education" element={<Books />} />
          {/* Revisar estas rutas, aun no estan bien definidas */}
          <Route path="/communities" element={<CommunityForm />} />
          {/*Revisar estas rutas, aun no estan bien definidas*/}
          <Route path="/Q&A" element={<QandA />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/detail/:id" element={<PostDetail />} />
          <Route path="/newspost" element={<NewsPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructor" element={<Instructor />} />
          {/* <Route path="/postulacion/:id" element={<PayInstructor />} /> */}
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} /> &&
          <Route path='/google' element={<GoogleLogin/> } /> &&
          <Route path="/fakeHome" element={<FakeHome />} /> &&
          <Route path="/" element={<LandingPage />} /> &&
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/ResetPassword" element={<ResetPasswordPage />} />
          {/* <Route path='*' element={<Error />} /> */}
        </Routes>
      )}

      {location.pathname !== "/" &&
      location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "*" ? (
        <Footer />
      ) : null}
    </div>
  );
};

export default App;
