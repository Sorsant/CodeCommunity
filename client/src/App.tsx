import { Route, Routes, } from 'react-router-dom';
import Home from './views/home/home'
import './App.css';
import React from 'react';
const App: React.FC = (): JSX.Element => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>

  );
}

export default App;
