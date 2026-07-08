import './App.css'
import Header from "./componentes/header";
import Hero from "./componentes/hero";
import Services from "./componentes/servicies";
import Footer from  "./componentes/footer"
import Features from './componentes/feature';
import Contact from './componentes/ContactCard';
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
      <Cta></Cta>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
