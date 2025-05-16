import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Proyectos from "./components/pages/proyectos/proyectos"
import Habilidades from "./components/pages/habilidades/habilidades"
import Footer from "./components/footer/footer"

function App() {

  return (
    <>
        <Navbar />
        <Hero />
        <Habilidades />
        <Proyectos />
        <Footer />
        </>
  )
}

export default App