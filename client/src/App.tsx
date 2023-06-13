import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './views/home/home'
import Login from "./views/login/login"
import './App.css';
import React from 'react';
import LandingPage from './views/landing/landing';
import Nav from './views/Nav/nav'
import QandA from './views/QAPage/QAPage'
import Register from './views/Register/register';

const App: React.FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" ? <Nav /> : null}
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path='/Q&A' element={<QandA />}></Route>

      </Routes>
    </div>

  );
}

export default App;
