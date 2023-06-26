import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/home/home";
import Login from "./views/login/login";
import "./App.css";
import React from "react";
import LandingPage from "./views/landing/landing";
import Nav from "./views/Nav/nav";
import QandA from "./views/QAPage/QAPage";
import Register from "./views/Register/register";
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
axios.defaults.baseURL = "https://codecommunity-production.up.railway.app/";
// import Home from './/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Facebook from './containers/Facebook';
import Google from './containers/Google';
import Layout from '../src/hocs/Layout';

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && location.pathname !== "/login" ? <Nav /> : null}
      <Routes>
        <Layout>
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/facebook' component={Facebook} />
          <Route exact path='/google' component={Google} />
          <Route exact path='/reset-password' component={ResetPassword} />
          <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
          <Route exact path='/activate/:uid/:token' component={Activate} />

          <Route path="/communities/:id" element={<DetailCommunity />} />
          {/*<Route path="/groups/:name" element={<DetailCommunity />} />*/}
          <Route path="/education" element={<Books />} />
          {/*Revisar estas rutas, aun no estan bien definidas*/}
          <Route path="/communities" element={<CommunityForm />} />{" "}
          {/*Revisar estas rutas, aun no estan bien definidas*/}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Q&A" element={<QandA />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/detail/:id" element={<PostDetail />} />{" "}
          <Route path="/newspost" element={<NewsPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/fakeHome" element={<FakeHome />} />
        </Layout>
      </Routes>
      {location.pathname !== "/" ? <Footer /> : null}
    </div>
  );
};

export default App;