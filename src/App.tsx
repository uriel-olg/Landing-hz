import './App.css'
import Header from "./header";
import Hero from "./hero";
import Services from "./servicies";
import Projects from "./project";
import Footer from  "./footer"
import PricingSoftware from "./landin"
import Features from './feature';
import ContactCard from './ContactCard';
  
function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features></Features>
      <Projects />
      <PricingSoftware></PricingSoftware>
      <ContactCard wsp="2604230590" facebook='asd' instagram='asd' email='olguriel@gmail.com'/>
      <Footer />
    </>
  );
}

export default App;