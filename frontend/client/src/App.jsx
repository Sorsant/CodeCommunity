import React from "react";
import axios from "axios";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from "react-router-dom";
import { checkAuth } from './test/features/user';



import Home from "./views/home/home";
import LandingPage from "./views/landing/landing";
import Nav from "./views/Nav/nav";
import QandA from "./views/QAPage/QAPage";
import Profile from "./views/profile/profile";
import CommunityForm from "./views/CommunityForm/communityForm";
import Edit from "./views/profile/edit";
import PostDetail from "./views/detail/detail";
// import Form from "./elements/News Post/Form";
import Books from "./views/Education/Books/books";
import Footer from "./views/Footer/footer";
import About from "./views/About/about";

import HomePage from './test/containers/Homepage';
import DashboardPage from './test/containers/DashboardPage';
import LoginPage from './test/containers/LoginPage';
import RegisterPage from './test/containers/RegisterPage';





axios.defaults.baseURL = "https://codecommunity-production.up.railway.app/";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" ? <Nav /> : null}
      <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />


        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/*<Route path="/groups/:name" element={<DetailCommunity />} />*/}
        <Route path="/education" element={<Books />} />
        {/*Revisar estas rutas, aun no estan bien definidas*/}
        <Route path="/communities" element={<CommunityForm />} />{" "}
        {/*Revisar estas rutas, aun no estan bien definidas*/}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/Q&A" element={<QandA />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />
        {/* <Route path="/detail/:id" element={<PostDetail />} />{" "} */}
        {/* <Route path="/newsform" element={<Form />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      {location.pathname !== "/" ? <Footer /> : null}
    </div>
  );
};

export default App;