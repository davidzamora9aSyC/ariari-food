const Propuesta = () => {
    return (
      <section id="propuesta" className="text-center py-20 bg-gradient-to-b from-white to-green-100">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-orange-500">
          ¿Por qué somos una chimba?
        </h2>
        <p className="text-lg mb-8 px-4">
          Con Ariari, optimizamos la cadena de suministro para que el costo de tus frutas y verduras sea
          menor al del mercado y conectamos directamente a agricultores con grandes oportunidades. ¡Juntos
          transformamos vidas!
        </p>
        <a href="#contacto" className="bg-green-600 hover:bg-green-700 text-white py-3 px-10 rounded-full shadow-md text-lg font-bold uppercase transition-transform transform hover:scale-105">
          Contáctanos
        </a>
      </section>
    );
  };
  
  export default Propuesta;
  