import HomeNetflix from './../../../assets/Netflix/homeNetflix.jpeg'
import InfoNetflix from './../../../assets/Netflix/infoNetflix.jpeg'
import TrailerNetflix from './../../../assets/Netflix/trailerNetflix.jpeg'
import LineasCelulares from './../../../assets/SistemaCelulares/Lineas.png'
import DetallesCelulares from './../../../assets/SistemaCelulares/Detalles.png'
import UsuariosCelulares from './../../../assets/SistemaCelulares/Usuarios.png'
import Styles from './proyectos.module.css'
import { ExternalLink, Github, FileCode } from 'lucide-react'

const proyectos = () => {


  const proyectos = [
    {
      id: 'Netflix',
      imagen: HomeNetflix,
      titulo: 'Netflix',
      descripcion: 'Proyecto de Netflix con React y Firebase',
      url: 'https://netproyect.netlify.app/',
      tags: ['React', 'Firebase', 'Javascript', 'CSS', 'Bootstrap'],
      github: '#',
      demo: '#',
    },
    {
      id: 'Celulares',
      imagen: LineasCelulares,
      titulo: 'Sistema de Celulares',
      descripcion: 'Sistema de celulares con React y NodeJS',
      url: 'https://sistemacelulares.onrender.com',
      tags: ['React', 'Node.js', 'postgreSQL', 'Express', 'Bootstrap', 'CSS'],
      github: '#',
      demo: '#',
    }
  ]


  return (
    <>
      <section id="proyectos" className={`${Styles.section} scroll-mt-20 bg-slate-900 bg-slate-900 text-white transition-colors duration-300`}>
      <div className={`${Styles.container} container mx-auto px-6`}>
                <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">My Projects</h2>
          <div className={`w-20 h-1 mx-auto mb-6 bg-sky-400`}></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 group bg-slate-800">
            <div className="relative overflow-hidden">
              <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 flex items-center justify-center gap-4 opacity-1 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/70`}>
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-slate-800 hover:bg-teal-400 transition-colors duration-300"
                    aria-label="View GitHub repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-slate-800 hover:bg-teal-400 transition-colors duration-300"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                  <FileCode size={20} className={`mr-2 text-sky-400`} />
                  {proyecto.titulo}
                </h3>
                <p className={`mb-4 text-slate-300`}>
                  {proyecto.descripcion}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {proyecto.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-3 py-1 rounded-full bg-slate-700 text-sky-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
            </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  )
}

export default proyectos