import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home/home';
import Aulas from './Pages/Aulas/aulas';
import Editor from './Pages/Editor/editor';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/home" element={<Home />} />
        <Route path = "/aulas" element={<Aulas />} />
        <Route path = "/editor" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
