import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home/home';
import Aulas from './Pages/Aulas/aulas';
import Editor from './Pages/Editor/editor';
import Cadastro from './Pages/Login/cadastro';
import Recuperacao from './Pages/Login/recuperacao';
import Redefinicao from './Pages/Login/redefinicao';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/home" element={<Home />} />
        <Route path = "/aulas" element={<Aulas />} />
        <Route path = "/editor/:id" element={<Editor />} />
        <Route path = "/editor" element={<Editor />} />
        <Route path = "/cadastro" element={<Cadastro/>} />
        <Route path = "/recuperacao" element={<Recuperacao />} />
        <Route path = "/redefinicao/:resetToken/:userId" element={<Redefinicao />} />
      </Routes>
    </Router>
  );
}

export default App;
