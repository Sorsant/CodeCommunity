import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './views/home/home'
import Login from "./views/login/login"
import './App.css';
import React from 'react';
import LandingPage from './views/landing/landing';
import Nav from './views/Nav/nav'

const App: React.FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" ? <Nav /> : null}
      <Routes>

        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<LandingPage />} />

      </Routes>
    </div>

  );
}

export default App;
