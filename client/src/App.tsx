
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './views/home/home'
import Login from "./views/login/login"
import './App.css';
import React from 'react';
import LandingPage from './views/landing/landing';
import Nav from './views/Nav/nav'
import QandA from './views/QAPage/QAPage'
import Register from './views/register/register';
import Profile from "./views/profile/profile";
import CommunityForm from './views/CommunityForm/communityForm';


const App: React.FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" ? <Nav /> : null}
      <Routes>

        <Route path="/nosedonde" element={<CommunityForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path='/Q&A' element={<QandA />}></Route>
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </div>
  );
};

export default App;
