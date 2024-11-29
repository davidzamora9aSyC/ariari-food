import React from 'react';


const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-gradient-to-r from-[rgba(46,125,50,0.9)] to-[rgba(102,187,106,0.9)] text-white py-4 px-6 shadow-[0_4px_20px_rgba(46,125,50,0.2)] transition-all duration-300 z-50">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Ariari</h1>
                <nav className="space-x-8 text-sm font-medium uppercase">
                    <a href="#quienes-somos" className="hover:text-orange-600 transition-colors text-xl">Quiénes Somos</a>
                    <a href="#propuesta" className="hover:text-orange-600 transition-colors text-xl">Propuesta</a>
                    <a href="#contacto" className="hover:text-orange-600 transition-colors text-xl">Contacto</a>
                </nav>
            </div>
        </header>

    );
};

export default Header;
