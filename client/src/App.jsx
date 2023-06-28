import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Books from "./views/Education/Books/books";
import Footer from "./views/Footer/footer";
import About from "./views/About/about";
import Instructor from "./views/Instructor/instructor";
import DetailCommunity from "./views/DetailCommunity/detailCommunity";
import FakeHome from "./views/FakeHome/fakeHome";


axios.defaults.baseURL = "https://codecommunity-production.up.railway.app/";
// import Home from './/Home';

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && location.pathname !== "/login" ? <Nav /> : null}
      <Routes>

        <Route path="/communities/:id" element={<DetailCommunity />} />
        {/*<Route path="/groups/:name" element={<DetailCommunity />} />*/}
        <Route path="/education" element={<Books />} />
        {/*Revisar estas rutas, aun no estan bien definidas*/}
        <Route path="/communities" element={<CommunityForm />} />{" "}
        {/*Revisar estas rutas, aun no estan bien definidas*/}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element={} /> */}
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/Q&A" element={<QandA />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/detail/:id" element={<PostDetail />} />{" "}
        <Route path="/newspost" element={<NewsPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructor" element={<Instructor />} />
        {/* <Route path="/fakeHome" element={<FakeHome />} /> */}

      </Routes>
      {location.pathname !== "/" ? <Footer /> : null}
    </div>
  );
};

export default App;