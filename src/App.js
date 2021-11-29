import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SocialLinks />
      <Services />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
