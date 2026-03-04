import './App.css'
import Header from "./header";
import Hero from "./hero";
import Services from "./servicies";
import Projects from "./project";
import CTA from "./cta";
import Footer from  "./footer"
import PricingSoftware from "./landin"
import Features from './feature';
  
function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features></Features>
      <Projects />
      <PricingSoftware></PricingSoftware>
      <CTA />
      <Footer />
    </>
  );
}

export default App;