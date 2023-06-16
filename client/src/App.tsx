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
import CommunityCards from "./views/Community/communityCards";
import PostDetail from "./views/detail/detail";
import NewsCards from "./views/news/newsCards";
import Form from "./components/News Post/Form";
const App: React.FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" ? <Nav /> : null}
      <Routes>
        <Route path="/communities" element={<CommunityCards />} />{" "}
        {/*Revisar estas rutas, aun no estan bien definidas*/}
        <Route path="/nosedonde" element={<CommunityForm />} />{" "}
        {/*Revisar estas rutas, aun no estan bien definidas*/}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Q&A" element={<QandA />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/news" element={<NewsCards />} />
        {/*Revisar estas rutas, aun no estan bien definidas*/}
        <Route path="/detail/:id" element={<PostDetail />} />{" "}
        {/* tengo que agregarle lo del params */}
        <Route path="/newsform" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
