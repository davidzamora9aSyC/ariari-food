import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Propuesta from './components/Propuesta';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Carousel />
            <Propuesta />
            <Footer />
        </>
    );
};

export default App;
