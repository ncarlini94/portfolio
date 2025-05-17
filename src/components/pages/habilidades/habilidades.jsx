import Styles from './habilidades.module.css'
import ReactImg from '../../../assets/react.svg'
import NodeImg from '../../../assets/node.svg'
import ExpressImg from '../../../assets/expressjs.svg'
import BootstrapImg from  '../../../assets/bootstrap.svg'
import Css3Img from '../../../assets/css3.svg'
import MongodbImg from '../../../assets/mongodb.svg'
import MysqlImg from '../../../assets/mysql.svg'
import JavascriptImg from '../../../assets/javascript.svg'
import GithubImg from '../../../assets/github.svg'


const habilidades = () => {

  const habilidades = [
    {nombre: 'React', img: ReactImg, categoria: 'Frontend'},
    {nombre: 'Node', img: NodeImg, categoria: 'Backend'},
    {nombre: 'Express', img: ExpressImg, categoria: 'Backend'},
    {nombre: 'Bootstrap', img: BootstrapImg, categoria: 'Frontend'},
    {nombre: 'CSS', img: Css3Img, categoria: 'Frontend'},
    {nombre: 'Mongo DB', img: MongodbImg, categoria: 'Database'},
    {nombre: 'SQL', img: MysqlImg, categoria: 'Database'},
    {nombre: 'JavaScript', img: JavascriptImg, categoria: 'Frontend'},
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
    <section id="habilidades" className={`${Styles.section} section scroll-mt-20 text-light`}>
        <div className={`${Styles.container} bg-slate-900 min-h-140`}>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-light">Habilidades</h2>
            <div className={`w-20 h-1 mx-auto mb-6 bg-sky-400`}></div>
        </div>
        <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {Object.entries(categorias).map(([categoria, habilidades]) => (
            <div key={categoria} className={`p-4 rounded-lg bg-slate-700 text-center`}>
              <h3 className="text-xl font-semibold capitalize pb-2">{categoria}</h3>
              <div className="space-y-4 place-self-center">
                {habilidades.map((habilidad) => (
                  <div key={habilidad.nombre} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img src={habilidad.img} className="w-8 h-8 inline-flex items-center justify-center mr-3
                        rounded-md bg-opacity-20"/>
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

export default habilidades