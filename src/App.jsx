  import './App.css'
  import Navbar from './components/navbar/navbar'
  import Hero from './components/hero/hero'
  import Proyectos from "./components/proyectos/proyectos"
  import Habilidades from "./components/habilidades/habilidades"
  import Footer from "./components/footer/footer"
  import Contacto from './components/contacto/contacto'
import { ThemeProvider } from './contexts/themeContext'
import '../i18n';


  function App() {

    return (
      <>
        <ThemeProvider>
          <Navbar />
          <Hero />
          <Habilidades />
          <Proyectos />
          <Contacto/>
          <Footer />
        </ThemeProvider>
      </>
    )
  }

  export default App