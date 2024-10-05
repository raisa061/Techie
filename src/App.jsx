import { faLaptopCode, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Technology from "./components/Technology";
import Testimonial from './components/Testimonial';
import Team from "./components/Team";
import Contact from "./components/Contact"




function App() {
  

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <About />
      <Features/>
      <Projects />
      <Technology />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;