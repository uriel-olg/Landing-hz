import './App.css'
import Header from "./componentes/header";
import Hero from "./componentes/hero";
import Services from "./componentes/servicies";
import Projects from "./componentes/project";
import Footer from  "./componentes/footer"
import PricingSoftware from "./componentes/landin"
import Features from './componentes/feature';
import ContactCard from './componentes/ContactCard';
import  Procesos  from './componentes/procesos';
import Tecnologias from './componentes/tecnologias';
import Cta from './componentes/cta';

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features></Features>
      <Procesos></Procesos>
      <Tecnologias></Tecnologias>
      {/* <Projects /> */}
      {/* <PricingSoftware></PricingSoftware> */}
      <Cta></Cta>
      <ContactCard wsp="2604230590" facebook='asd' instagram='asd' email='olguriel@gmail.com'/>
      <Footer />
    </>
  );
}

export default App;