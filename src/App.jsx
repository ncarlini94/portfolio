import './App.css'
import Navbar from './components/navbar/navbar'
import Banner from './components/banner/banner'
import Proyectos from "./components/pages/proyectos/proyectos"
import Habilidades from "./components/pages/habilidades/habilidades"
import Footer from "./components/footer/footer"

function App() {

  return (
    <>
        <Navbar />
        <Banner />
        <Habilidades />
        <Proyectos />
        <Footer />
        </>
  )
}

export default App