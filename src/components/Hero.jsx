import ariariGif from '../assets/images/ARIARI.gif';

const Hero = () => {
    return (
        <section className="h-screen bg-center bg-cover relative flex flex-col items-center justify-center text-center text-white">
            <div className="absolute inset-0 bg-[rgba(0,100,0,0.5)]"></div>
            <div className="relative z-10 px-4">
                <img src={ariariGif} alt="Logo Ariari" className="w-32 mb-6 mx-auto animate-slowBounce" />
                <h1 className="text-5xl font-bold leading-tight mb-4 text-shadow-[0_4px_20px_rgba(0,100,0,0.6)]">
                    DEL CAMPO COLOMBIANO A LA PUERTA DE TU NEGOCIO
                </h1>
                <p className="text-xl mb-6 leading-relaxed">
                    + OPORTUNIDADES PARA EL PRODUCTOR <br />
                    - COSTOS PARA TU NEGOCIO <br />
                    ¡APOYA AL CAMPO COLOMBIANO!
                </p>
                <a
                    href="https://wa.me/573142676862"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-800 hover:to-orange-600 text-white py-3 px-8 rounded-full shadow-lg text-lg uppercase font-bold transition-transform transform hover:scale-110"
                >
                    Haz tu pedido aquí
                </a>
            </div>
        </section>
    );
};

export default Hero;
