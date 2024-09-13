import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container py-6 sm:py-8 lg:py-12 mx-auto max-w-screen-xl px-4 md:px-8">
      {/* Sección Hero o de bienvenida */}
      <section class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-8 flex flex-wrap justify-between md:mb-16">
      <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Aprende tu<br />nuevo oficio</h1>

        <p class="max-w-md leading-relaxed text-gray-500 xl:text-lg">Somos un centro permanente de capacitación, entrenamiento y reparaciones, para todos aquellos que siempre desearon conocer los secretos que encierran las técnicas que se utilizan para reparar abolladuras menores e impactos de granizo en automóviles, sin dañar la pintura.
</p>
      </div>

      <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <img src="/fotos/espana/Tarragona_21.jpg" loading="lazy" alt="Curso en Argentina" class="h-full w-full object-cover object-center" />
        </div>

        <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img src="/fotos/espana/Tarragona_19.jpg" loading="lazy" alt="Curso en España" class="h-full w-full object-cover object-center" />
        </div>
      </div>
    </div>
</section>


  {/* Sección de Tipos de Cursos */}
  <section className="courses-section mt-6 bg-grisPlg rounded lg:py-6">
  <h2 className="mb-2 pt-4 text-center text-2xl font-bold text-gray-800 lg:text-3xl">
    Nuestros Cursos
  </h2>
  <div className="courses-grid mx-auto max-w-screen-xl px-4 md:px-8 flex flex-wrap justify-center gap-4">
    <Link to="/cursos/sacabollos">
      <div className="card w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <div className="content w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h3 className="heading">Curso de Sacabollos</h3>
          <p className="para">Aprende a reparar abolladuras en la carrocería <strong>sin dañar la pintura</strong>.</p>
        </div>
      </div>
    </Link>
    <Link to="/cursos/reparacion-cristales">
      <div className="card w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <div className="content w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h3 className="heading">Curso de Reparación de Cristales</h3>
          <p className="para">Domina las técnicas para reparar las roturas en cristales sin necesidad de cambiarlos.</p>
        </div>
      </div>
    </Link>
  </div>
</section>



      {/* Franja con trayectoria y clientes */}
      <section className="trayectoria-section mt-6 bg-rojoPlg rounded py-6">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      <div className="w-full">
        <h3 className="text-2xl font-bold text-white">53 años</h3>
        <p className="text-gray-200">Trayectoria</p>
      </div>
      <div className="w-full">
        <h3 className="text-2xl font-bold text-white">+1000 clientes</h3>
        <p className="text-gray-200">Clientes Satisfechos</p>
      </div>
      <div className="w-full">
        <h3 className="text-2xl font-bold text-white">+5 países</h3>
        <p className="text-gray-200">Presencia Internacional</p>
      </div>
    </div>
  </div>
</section>







{/* Sección de Testimonios */}
<section className="testimonials-section rounded mt-6">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    {/* Video testimonial de YouTube */}
    <h3 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Testimonios de nuestros alumnos</h3>
    <div className="responsive-video mx-auto mb-8" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', borderRadius: '15px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <iframe
        src="https://www.youtube.com/embed/Y-a9c04ewPM"
        title="Testimonios en video"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '15px' }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="grid gap-4 md:grid-cols-2 md:gap-8">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-grisOPlg px-6 py-4 md:gap-4">
        <div className="max-w-md text-center text-white lg:text-base">
          “Este curso ha superado mis expectativas. Nunca pensé que podría reparar bollos con tanta facilidad y precisión. Ahora tengo mi propio taller y mis clientes están encantados con los resultados. ¡Totalmente recomendable!”
        </div>
        <div className="flex flex-col items-center gap-2">
          <div>
            <div className="text-center text-sm font-bold text-indigo-50 md:text-base">Paco Fernández</div>
            <p className="text-center text-xs text-indigo-200 md:text-sm">Alumno de España</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-lg bg-grisOPlg px-6 py-4 md:gap-4">
        <div className="max-w-md text-center text-white lg:text-base">
          “Gracias al curso de Sacabollos pude aprender técnicas que no conocía y mejorar en mi trabajo. Me encantó lo práctico y directo que fue todo, ya estoy aplicando lo aprendido en mi taller y mis clientes lo notan.”
        </div>
        <div className="flex flex-col items-center gap-2">
          <div>
            <div className="text-center text-sm font-bold text-indigo-50 md:text-base">Hector Giménez</div>
            <p className="text-center text-xs text-indigo-200 md:text-sm">Alumno de Argentina</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
