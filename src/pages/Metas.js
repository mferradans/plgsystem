import React, { useState } from 'react';

const Metas = () => {
  const [sliderValue, setSliderValue] = useState(50); // Valor inicial del slider

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="section py-6 sm:py-8 lg:py-12 mx-auto max-w-screen-lg px-4 md:px-8">
      <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Antes y Después</h1>
      <p className="mb-6 text-justify  text-gray-500 sm:text-lg md:mb-8">
      Aumento de la clientela del prestigio personal y de la facturación con la cosmética del auto de alta gama y nuevo. Con un <strong>servicio rápido y cualificado</strong>. </p>
      <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Objetivos del curso:</h2>
      <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
        <li>Revelar las nuevas técnicas que aplican los profesionales del desabollado para desarrollar reparaciones rápidas y conservando la pintura original.</li>
        <li>Integrar a todas las personas que deseen incrementar sus ingresos o busquen una salida laboral rentable.</li>
        <li>Integrar este método y sistema de reparación al mundo de la reparación automotriz, en especial en concesionarias y talleres en general y mejorar la reparación tradicional de chapa y pintura ya que este sistema se integra perfectamente a estas practicas tradicionales de reparación sin ir en contra de las mismas.</li>
        <li>Dar a conocer los nuevos instrumentos de trabajo que podemos usar y que nos permiten realizar una adecuada reparación sin dañar la pintura original.</li>
      </ul>

      {/* Contenedor del antes y después */}
      <div className="container2 rounded" style={{ position: "relative", width: "500px", height: "651px", margin: "0 auto", border: "2px solid white", overflow: "hidden" }}>
        
        {/* Imagen de fondo (Antes) */}
        <div
          className="img2 background-img"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(/fotos/metas/nissanantes.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* Imagen de primer plano (Después) */}
        <div
          className="img2 foreground-img"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(/fotos/metas/nissandespues.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: `inset(0 0 0 ${sliderValue}%)` // Recorta la imagen desde la izquierda
          }}
        ></div>

        {/* Control deslizante */}
        <input
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          className="slider"
          onChange={handleSliderChange}
          style={{
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
            height: "100%",
            zIndex: 10,
            opacity: 0,
          }}
        />

        {/* Botón deslizante */}
        <div
          className="slider-button"
          style={{
            pointerEvents: "none",
            position: "absolute",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "white",
            left: `calc(${sliderValue}% - 15px)`,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
          }}
        ></div>
      </div>
      <p className="mb-6 text-justify  text-gray-500 sm:text-lg md:mb-8">
      Para la reparación de pequeñas y medianas abolladuras en la carrocería, sin la eliminación de la capa de la pintura, generalmente causadas por granizo, actos de vandalismo, maniobras de aparcamiento, etc.<br /><br />
      A tal propósito <strong>PLG SYSTEM</strong>, le permite eliminar todas las imperfecciones citadas previamente sin recurrir a la pintura, manteniendo de esta forma la pintura original, y en tiempos muy breves. </p>
      <h2 className="mb-2 text-lg font-semibold text-rojoPlg sm:text-xl md:mb-4">TIEMPOS DE INTERVENCIÓN MUY REDUCIDOS</h2>
      <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Ventajas de este tipo de reparación:</h2>
      <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
        <li>Se mantiene la pintura original, no hay variaciones de color.</li>
        <li>Se reducen los tiempos de trabajo en el taller y espera para el cliente.</li>
        <li>Es más económico que el arreglo tradicional, de chapa y pintura y se integra perfectamente al mismo.</li>
        <li>Es mas limpio y no perjudica el medioambiente.</li>
        <li>Es uno de los oficios mejor remunerado y requerido en todo el mundo.</li>
        <li>La disponibilidad a la <strong>reparación rápida</strong> nos hace diferentes y posibilita satisfacer a clientes con un alto nivel de exigencia.</li>
        </ul>
      <p className="mb-6 text-justify  text-gray-500 sm:text-lg md:mb-8">
      Así con esta propuesta, nace la posibilidad de realizar reparaciones rápidas y mejorar los ingresos de sus talleres.<br /><br />
      El principal beneficio luego de hacer el curso, es que los asistentes van a aplicar los nuevos conocimientos y conservarán la pintura original de fábrica.<br /><br />
      Lo mismo que las condiciones de cada pieza, como si no hubiese sufrido algún daño el vehículo.<br /><br />
      Los profesionales que integran este sistema de reparación rápido logran efectuar en tiempos brevísimos las reparaciones, además de obtener un sorprendente aumento de la clientela, del prestigio personal y de la facturación.
      </p>
      
    </div>
  );
};

export default Metas;
