import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className="flex items-center justify-center mx-auto max-w-screen-2xl p-4">
      <Helmet>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Helmet>

      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contáctanos</h1>
        <p className="text-gray-600 mb-6">
        ¡Estamos acá para ayudarte! ¿Tenes alguna pregunta, comentario o sugerencia? No dudes en ponerte en contacto con nosotros a través de las siguientes formas. ¡Estamos deseando escucharte!        </p>

        {/* Información de contacto */}
        <div className="space-y-4">
          {/* Teléfono */}
          <div className="flex items-center text-gray-700">
            <i className="fas fa-phone-alt text-3xl mr-3 text-rojoPlg"></i> {/* Ícono de teléfono */}
            <span>+54 9 3534229297</span>
          </div>

          {/* Correo - Usa mailto para abrir el cliente de correo */}
          <div className="flex items-center text-gray-700">
            <i className="fas fa-envelope text-3xl mr-3 text-rojoPlg"></i> {/* Ícono de correo */}
            <a href="mailto:info@plgsystems.com" className="text-gray-700 hover:text-gray-900">
            info@plgsystems.com
            </a>
          </div>

          {/* WhatsApp - Abre el chat de WhatsApp */}
          <div className="flex items-center text-gray-700">
            <i className="fab fa-whatsapp text-3xl mr-3 text-rojoPlg"></i> {/* Ícono de WhatsApp */}
            <a
              href="https://wa.me/5493534229297" // Enlace de WhatsApp con el número
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              Chat en WhatsApp
            </a>
          </div>
 
          {/* Instagram */}
          {/* 
          <div className="flex items-center text-gray-700">
            <i className="fab fa-instagram text-3xl mr-3 text-rojoPlg"></i>
            <a
              href="https://instagram.com" // Enlace de Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              Instagram
            </a>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
