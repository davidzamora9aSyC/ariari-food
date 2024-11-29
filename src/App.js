import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Propuesta from "./components/Propuesta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Carousel />
      <Propuesta />
      <Footer />
    </div>
  );
}

export default App;
