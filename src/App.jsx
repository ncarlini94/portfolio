  import './App.css'
  import Navbar from './components/navbar/navbar'
  import Hero from './components/hero/hero'
  import Proyectos from "./components/pages/proyectos/proyectos"
  import Habilidades from "./components/pages/habilidades/habilidades"
  import Footer from "./components/footer/footer"
  import Contacto from './components/contacto/contacto'

  function App() {

    return (
      <>
          <Navbar />
          <Hero />
          <Habilidades />
          <Proyectos />
          <Contacto/>
          <Footer />
          </>
    )
  }

  export default App