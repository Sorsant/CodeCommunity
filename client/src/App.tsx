import { Route, Routes, } from 'react-router-dom';
import Home from './views/home/home'
import Login from "./views/login/login"
import './App.css';
import React from 'react';
const App: React.FC = (): JSX.Element => {

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>

  );
}

export default App;
