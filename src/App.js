import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home/home';
import Aulas from './Pages/Aulas/aulas';
import TelaEditor from './Pages/Editor/editor';
import Cadastro from './Pages/Login/cadastro';
import Recuperacao from './Pages/Login/recuperacao';
import Redefinicao from './Pages/Login/redefinicao';
import Test from './Componente/test'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/home" element={<Home />} />
        <Route path = "/aulas" element={<Aulas />} />
        <Route path = "/editor/:id" element={<TelaEditor />} />
        <Route path = "/editor" element={<TelaEditor />} />
        <Route path = "/cadastro" element={<Cadastro/>} />
        <Route path = "/recuperacao" element={<Recuperacao />} />
        <Route path = "/redefinicao/:resetToken/:userId" element={<Redefinicao />} />
        <Route path = "/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
