import { useTranslation } from 'react-i18next'
import useTheme from '../../hooks/useTheme'
import HomeNetflix from './../../assets/Netflix/homeNetflix.jpeg'
import LineasCelulares from './../../assets/SistemaCelulares/Lineas.png'
import Styles from './proyectos.module.css'
import { ExternalLink, Github, FileCode } from 'lucide-react'

const Proyectos = () => {

  const { t } = useTranslation()
  const { isDarkMode } = useTheme()


  const proyectos = [
    {
      id: 'Netflix',
      imagen: HomeNetflix,
      titulo: 'NetflixTitulo',
      descripcion: 'Netflix',
      url: 'https://netproyect.netlify.app/',
      tags: ['React', 'Firebase', 'Javascript', 'CSS', 'Bootstrap'],
      github: ['https://github.com/ncarlini94/netflix_final'],
      demo: 'https://netproyect.netlify.app/',
    },
    {
      id: 'Celulares',
      imagen: LineasCelulares,
      titulo: 'SistemaTitulo',
      descripcion: 'Sistema',
      url: 'https://sistemacelulares.onrender.com',
      tags: ['React', 'Node.js', 'postgreSQL', 'Express', 'Bootstrap', 'CSS'],
      github: ['https://github.com/ncarlini94/SistemaCelularesFrontend', 'https://github.com/ncarlini94/SistemaCelularesBackend'],
      demo: 'https://sistemacelulares.onrender.com',
    }
  ]


  return (
    <>
      <section id="Proyectos" className={`${Styles.section} ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-100'} section scroll-mt-20 transition-colors duration-300 `}>
      <div className={`${Styles.container} container max-sm:py-8 lg:h-120 2xl:h-180 mx-auto content-center`}>
                <div className="text-center mb-8">
          <h2 className={`${isDarkMode ? 'text-white' : 'text-black'} text-3xl font-bold mb-2`}>{t("Proyectos")}</h2>
          <div className={`w-20 h-1 mx-auto mb-6 bg-sky-400`}></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-sm:px-2">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-400 drop-shadow-2xl'} rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 group `}>
            <div className="relative overflow-hidden">
              <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 flex items-center justify-center gap-4 opacity-1 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/70`}>
                {proyecto.github.map((repoUrl, idx) => (
                  <a
                    key={idx}
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-slate-800 hover:bg-teal-400 transition-colors duration-300"
                    aria-label={`View GitHub repo ${idx + 1}`}
                  >
                    <Github size={20} />
                  </a>
                ))}
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
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <FileCode size={20} className={`${isDarkMode ? 'text-sky-400' : ' text-white'} mr-2`} />
                  {t(proyecto.titulo)}
                </h3>
                <p className={`${isDarkMode ? 'text-slate-300' : ' text-white'} mb-4`}>
                  {t(proyecto.descripcion)}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {proyecto.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`${isDarkMode ? 'bg-slate-700 text-sky-300' : 'bg-slate-500 text-white'} text-xs px-3 py-1 rounded-full`}
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

export default Proyectos