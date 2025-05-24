import Styles from './habilidades.module.css'
import useTheme from '../../hooks/useTheme'
import { useTranslation } from 'react-i18next'

// Importar imagenes
import ReactImg from '../../assets/Habilidades/react.svg'
import NodeImg from '../../assets/Habilidades/node.svg'
import ExpressImg from '../../assets/Habilidades/expressjs.svg'
import BootstrapImg from  '../../assets/Habilidades/bootstrap.svg'
import Css3Img from '../../assets/Habilidades/css3.svg'
import MongodbImg from '../../assets/Habilidades/mongodb.svg'
import MysqlImg from '../../assets/Habilidades/mysql.svg'
import JavascriptImg from '../../assets/Habilidades/javascript.svg'
import GithubImg from '../../assets/Habilidades/github.svg'
import FirebaseImg from '../../assets/Habilidades/firebase.svg'
import PostmanImg from '../../assets/Habilidades/postman.svg'
import PostgresqlImg from '../../assets/Habilidades/postgresql.svg'
import tailwindImg from '../../assets/Habilidades/tailwind.svg'



const Habilidades = () => {

  const { t } = useTranslation()
  const { isDarkMode } = useTheme()

  const habilidades = [
    {nombre: 'JavaScript', img: JavascriptImg, categoria: 'Frontend'},
    {nombre: 'React', img: ReactImg, categoria: 'Frontend'},
    {nombre: 'CSS', img: Css3Img, categoria: 'Frontend'},
    {nombre: 'Tailwind', img: tailwindImg, categoria: 'Frontend'},
    {nombre: 'Bootstrap', img: BootstrapImg, categoria: 'Frontend'},
    {nombre: 'Node', img: NodeImg, categoria: 'Backend'},
    {nombre: 'Express', img: ExpressImg, categoria: 'Backend'},
    {nombre: 'SQL', img: MysqlImg, categoria: 'Database'},
    {nombre: 'Mongo', img: MongodbImg, categoria: 'Database'},
    {nombre: 'Firebase', img: FirebaseImg, categoria: 'Database'},
    {nombre: 'Postgre', img: PostgresqlImg, categoria: 'Database'},
    {nombre: 'Postman', img: PostmanImg, categoria: 'Otros'},
    {nombre: 'GitHub', img: GithubImg, categoria: 'Otros'},
  ]


  const categorias = {
    Frontend: habilidades.filter(habilidades => habilidades.categoria === 'Frontend'),
    Backend: habilidades.filter(habilidades => habilidades.categoria === 'Backend'),
    Database: habilidades.filter(habilidades => habilidades.categoria === 'Database'),
    Otros: habilidades.filter(habilidades => habilidades.categoria === 'Otros')
  }




  return (
    <>
    <section id="habilidades" className={`${Styles.section} section`}>
        <div className={`${Styles.container} ${isDarkMode ? 'dark:bg-slate-900 bg-slate-100 text-light' : 'bg-slate-100'}  px-3 py-0 sm:px-6 sm:py-10 h-180 lg:h-150 2xl:h-190 mx-auto content-center`}>
        <div className="text-center mb-8">
            <h2 className={`${isDarkMode ? 'text-light' : 'text-black'} text-3xl font-bold mb-2`}>{t("Habilidades")}</h2>
            <div className={`w-20 h-1 mx-auto mb-6 bg-sky-400`}></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 max-sm:gap-3 sm:gap-4 max-w-7xl mx-auto">
          {Object.entries(categorias).map(([categoria, habilidades]) => (
            <div key={categoria} className={`${isDarkMode ? 'bg-slate-700 text-white' : 'text-white bg-slate-400 drop-shadow-2xl'} p-4 rounded-lg text-center`}>
              <h3 className="text-xl font-semibold capitalize pb-2">{categoria}</h3>
              <div className="space-y-4 place-self-center">
                {habilidades.map((habilidad) => (
                  <div key={habilidad.nombre} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img src={habilidad.img} className={`${isDarkMode ? '' : 'fill-white drop-shadow-xl/25'} w-8 h-8 inline-flex items-center justify-center mr-3
                        rounded-md bg-opacity-20`}/>
                        <span className="font-medium">{habilidad.nombre}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
        </section>
    </>
  )
}

export default Habilidades