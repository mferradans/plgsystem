import React from 'react';

const QuienesSomos = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        {/* Sección principal */}
        <div className="text-center mb-8">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Quiénes Somos</h1>
          <p className="text-justify mb-4 text-gray-500 sm:text-lg md:mb-8">
            Hemos creado un <strong>Centro Permanente de Capacitación, Entrenamiento y Reparaciones</strong> diseñado para quienes desean aprender las técnicas para reparar abolladuras menores e impactos de granizo en automóviles sin dañar la pintura. Nuestro objetivo es formar profesionales capaces de aplicar estos métodos con precisión y eficiencia.
          </p>
        </div>

        {/* Sección con dos columnas */}
<div className="flex mx-auto max-w-screen-lg flex-col md:flex-row gap-10">
  {/* Columna izquierda - Texto */}
  <div className="md:w-2/3 ">
    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-0">Liderazgo Técnico</h2>
    <p className="mb-4 text-justify text-gray-500 sm:text-lg md:mb-8">
      El <strong>Sr. Pedro Giai</strong>, con una amplia trayectoria en el sector, es nuestro <strong>Director Técnico General</strong>. Su experiencia y habilidad en la aplicación de estas técnicas lo posicionan como un referente en la industria. Junto con su equipo de expertos, se encarga de la formación profesional de todos aquellos interesados en aprender este oficio.
    </p>
  </div>

  {/* Columna derecha - Foto */}
  <div className="md:w-1/3 flex justify-end">
    <img
      src="/fotos/pedro2.jpg"
      alt="Pedro Giai"
      className="rounded-lg shadow-lg md:w-48 max-w-full h-auto"
    />
  </div>
</div>

        <h2 className="mb-2 mt-10 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Capacitación Especializada</h2>
          <p className="mb-4 text-justify text-gray-500 sm:text-lg md:mb-8">
          Ofrecemos capacitación profesional en uno de los campos más rentables de la reparación de carrocerías. Nuestra enseñanza se centra en la técnica de reparación de abolladuras sin pintura, una habilidad muy demandada en el mercado actual.
          </p>
          <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Apoyo y Eficiencia</h2>
          <p className="mb-4 text-justify text-gray-500 sm:text-lg md:mb-8">
          Contamos con un equipo logístico altamente capacitado, que garantiza la eficiencia en todas nuestras actividades formativas y de reparación.
          </p>
      </div>

    </div>
  );
};

export default QuienesSomos;
