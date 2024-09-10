import React from 'react';

const CursoReparacionCristales = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Curso de Reparación de Cristales</h1>

        <p className="mb-6 text-justify text-gray-500 sm:text-lg md:mb-8">
        Hemos implementado un curso de capacitación en reparación de cristales, donde proveemos en el mismo un DOBLE KIT PROFESIONAL completo e insumos para efectuar 120 reparaciones. <br /><br />

        Esta actividad permite una salida laboral inmediata, puesto que al terminar el curso se esta en condiciones de comenzar con las reparaciones.
        </p>


<div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
  <img src="/fotos/cristales/cristales1.jpg" loading="lazy"  className="h-full w-full object-cover object-center" />
</div>   
<div className="grid grid-cols-2 gap-4">
  <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-lg">
    <img src="/fotos/cristales/cristales3.jpg" loading="lazy"  className="h-full w-full object-cover object-center" />
  </div>
  <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-lg">
    <img src="/fotos/cristales/cristales4.jpg" loading="lazy" className="h-full w-full object-cover object-center" />
  </div>
</div>



        <h2 className="mb-2 mt-4 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Antes y después de la reparación de cristales</h2>

        <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
          <img src="/fotos/cristales/cristales-antes-despues.jpg" loading="lazy" className="h-full w-full object-cover object-center" />
        </div>

        <h2 className="mb-2 mt-4 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Alumnos poniendo en práctica</h2>

        <p className="text-gray-500 text-justify  sm:text-lg mb-3">Echa un vistazo a nuestros alumnos en acción, aplicando sus habilidades prácticas en el curso de reparación de cristales de vehículos. ¡Descubre la excelencia en cada detalle!</p>
      </div>


<div className="mx-auto max-w-screen-lg px-4 md:px-8 grid grid-cols-2 gap-4">

  <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-lg">
    <img src="/fotos/cristales/edwin1.jpg" loading="lazy" alt="Cristales 1" className="h-full w-full object-cover object-center" />
  </div>


  <div className="relative  overflow-hidden rounded-lg bg-gray-100 shadow-lg">
    <img src="/fotos/cristales/edwin2.jpg" loading="lazy" alt="Cristales 2" className="h-full w-full object-cover object-center" />
  </div>


  <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-lg">
    <img src="/fotos/cristales/luis1.jpg" loading="lazy" alt="Cristales 3" className="h-full w-full object-cover object-center" />
  </div>

  <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-lg">
    <img src="/fotos/cristales/luis2.jpg" loading="lazy" alt="Cristales 4" className="h-full w-full object-cover object-center" />
  </div>
</div>


    </div>
  );
};

export default CursoReparacionCristales;
