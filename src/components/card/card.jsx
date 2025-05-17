import Carousel from '../carousel/carousel'
import Styles from './card.module.css'

const card = ({id, imagenes, titulo, descripcion, url}) => {


  return (
    <>
      <div className="card" style={{width: '85vh', border:'none'}}>
        <Carousel id={id} imagen={imagenes}/>
        <div className="card-body bg-slate-800">
        <h5 className="card-title text-white">{titulo}</h5>
        <p className="card-text text-light">{descripcion}</p>
        <a href={url} className={`${Styles.btn}  px-6 py-3 rounded-md font-medium border transition-colors duration-300 bg-teal-600 border-teal-400 text-teal-400 hover:bg-teal-200/20`}>Visitar</a>
        </div>
      </div>
    </>
  )
}

export default card