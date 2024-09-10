import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Metas from './pages/Metas';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import CursoSacabollos from './components/CursoSacabollos';
import CursoReparacionCristales from './components/CursoReparacionCristales';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/metas" element={<Metas />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/cursos/sacabollos" element={<CursoSacabollos />} />
        <Route path="/cursos/reparacion-cristales" element={<CursoReparacionCristales />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
