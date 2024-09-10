import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-rojoPlg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link className="text-white text-xl font-bold" to="/">
          <img
            src="/images/logo2.png" /* Ruta de la imagen del logo */
            alt="Logo"
            width="40" /* Ancho del logo */
            height="40" /* Alto del logo */
            className="logo" /* Clase para aplicar los estilos personalizados */
          />
        </Link>

        {/* Botón para dispositivos móviles */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white block lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Links del navbar */}
        <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="text-white flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <li className="nav-item">
              <Link className="hover:text-gray-300" to="/">Inicio</Link>
            </li>          
            <li className="nav-item">
              <Link className="hover:text-gray-300" to="/quienes-somos">Quiénes Somos</Link>
            </li>
            <li className="nav-item">
              <Link className="hover:text-gray-300" to="/metas">Metas y Resultados</Link>
            </li>
            <li className="nav-item">
              <Link className="hover:text-gray-300" to="/galeria">Galería</Link>
            </li>

            {/* Menú desplegable de Cursos */}
            <li className="relative group">
              <button className="hover:text-gray-300 focus:outline-none">
                Cursos
              </button>
              <ul className="absolute hidden group-hover:block group-focus-within:block bg-white text-black mt-1 py-1 rounded-md shadow-lg">
                <li>
                  <Link className="block px-4 py-1 hover:bg-gray-200" to="/cursos/sacabollos">
                    Curso de Sacabollos
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-1 hover:bg-gray-200" to="/cursos/reparacion-cristales">
                    Curso de Reparación de Cristales
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="hover:text-gray-300" to="/contacto">Contáctenos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
