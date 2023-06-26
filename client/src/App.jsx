import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/home/home";
import "./App.css";
import React from "react";
import LandingPage from "./views/landing/landing";
import Nav from "./views/Nav/nav";
import QandA from "./views/QAPage/QAPage";
import Profile from "./views/profile/profile";
import CommunityForm from "./views/CommunityForm/communityForm";
import Edit from "./views/profile/edit";
import PostDetail from "./views/detail/detail";
import NewsPost from "./components/News Post/NewsPost";
import Books from "./views/Education/Books/books";
import Footer from "./views/Footer/footer";
import About from "./views/About/about";
import Instructor from "./views/Instructor/instructor";
import DetailCommunity from "./views/DetailCommunity/detailCommunity";
import FakeHome from "./views/FakeHome/fakeHome";
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Facebook from './containers/Facebook';
import Google from './containers/Google';
axios.defaults.baseURL = "https://codecommunity-production.up.railway.app/";
// import Home from './/Home';

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" ? <Nav /> : null}
      <Routes>

        {/* <Route  path='/' element={Home} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/facebook' element={<Facebook />} />
        <Route path='/google' element={<Google />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
        <Route path='/activate/:uid/:token' element={<Activate />} />

        <Route path="/communities/:id" element={<DetailCommunity />} />
        {/*<Route path="/groups/:name" element={<DetailCommunity />} />*/}
        <Route path="/education" element={<Books />} />
        {/*Revisar estas rutas, aun no estan bien definidas*/}
        <Route path="/communities" element={<CommunityForm />} />{" "}
        {/*Revisar estas rutas, aun no estan bien definidas*/}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Q&A" element={<QandA />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/detail/:id" element={<PostDetail />} />{" "}
        <Route path="/newspost" element={<NewsPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/fakeHome" element={<FakeHome />} />

      </Routes>
      {location.pathname !== "/" ? <Footer /> : null}
    </div>
  );
};

export default App;