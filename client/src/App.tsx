import { Route, Routes, } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './views/home/home'
import Register from './views/register/register';



const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>

  );
}

export default App;
