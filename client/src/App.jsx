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
// import PostDetail from "./views/detail/detail";
import Form from "./components/News Post/Form";
import Books from "./views/Education/Books/books";
import Footer from "./views/Footer/footer";
// import About from "./views/About/about";
axios.defaults.baseURL = "https://codecommunity-production.up.railway.app/";

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" ? <Nav /> : null}
      <Routes>
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
        {/* <Route path="/detail/:id" element={<PostDetail />} />{" "} */}
        <Route path="/newsform" element={<Form />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      {location.pathname !== "/" ? <Footer /> : null}
    </div>
  );
};

export default App;
