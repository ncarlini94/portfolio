import React from 'react'
import Carousel from '../carousel/carousel'

const card = ({id, imagenes, titulo, descripcion, url}) => {


  return (
    <>
      <div className="card" style={{width: '80vh'}}>
        <Carousel id={id} imagen={imagenes}/>
        <div className="card-body" style={{backgroundColor:'rgba(0,0,0, 0.6)'}}>
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text text-light">{descripcion}</p>
        <a href={url} className="btn btn-primary">Visitar</a>
        </div>
      </div>
    </>
  )
}

export default card