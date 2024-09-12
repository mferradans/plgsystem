import React from 'react';
import { Carousel } from 'react-bootstrap';

const Galeria = () => {
  const argentinaFotos = ["11.jpg", "12.jpg", "13.jpg", "15.jpg", "19.jpg", "21.jpg", "arg002.jpg", "mdp_11.jpg", "mdp_13.jpg", "mdp_18.jpg"];
  const mexicoFotos = ["mexico_06.jpg", "mexico_25.jpg", "mexico_26.jpg", "mexico_27.jpg", "mexico_29.jpg", "mexico_30.jpg"];
  const espanaFotos = ["esp001.jpg", "esp01.jpg", "esp002.jpg", "esp03.jpg", "Tarragona_03.jpg", "Tarragona_18.jpg", "Tarragona_19.jpg", "Tarragona_21.jpg", "Tarragona_27.jpg"];

  return (
    <div className="section py-6 sm:py-8 lg:py-12 mx-auto max-w-screen-lg px-4 md:px-8">
      <h1 className=' mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6'>Galería de Fotos</h1>

      <h3 className="text-center mb-2 text-gray-500">Curso dictado en Argentina</h3>
      <Carousel>
        {argentinaFotos.map((foto, index) => (
          <Carousel.Item key={index}>
            <img className="d-block relative overflow-hidden rounded-lg shadow-lg  " 
            src={`/fotos/argentina/${foto}`} alt={`Argentina Foto ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <h3 className="text-center mt-5 mb-2 text-gray-500">Curso dictado en México</h3>
      <Carousel>
        {mexicoFotos.map((foto, index) => (
          <Carousel.Item key={index}>
            <img className="d-block relative overflow-hidden rounded-lg shadow-lg " 
            src={`/fotos/mexico/${foto}`} alt={`México Foto ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <h3 className="text-center mt-5 mb-2 text-gray-500">Curso dictado en España</h3>
      <Carousel>
        {espanaFotos.map((foto, index) => (
          <Carousel.Item key={index}>
            <img className="d-block relative overflow-hidden rounded-lg shadow-lg " 
            src={`/fotos/espana/${foto}`} alt={`España Foto ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Galeria;
