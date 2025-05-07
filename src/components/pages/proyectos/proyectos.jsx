import React from 'react'
import Card from '../../card/card'
import HomeNetflix from './../../../assets/Netflix/homeNetflix.jpeg'
import InfoNetflix from './../../../assets/Netflix/infoNetflix.jpeg'
import TrailerNetflix from './../../../assets/Netflix/trailerNetflix.jpeg'
import LineasCelulares from './../../../assets/SistemaCelulares/Lineas.png'
import DetallesCelulares from './../../../assets/SistemaCelulares/Detalles.png'
import UsuariosCelulares from './../../../assets/SistemaCelulares/Usuarios.png'
import Styles from './proyectos.module.css'

const proyectos = () => {


  return (
    <>
      <div className={`${Styles.container}`}>
      <h2 style={{color:'white',textAlign:'center',padding:'80px 0 0 0'}}>Proyectos</h2>
        <div className={`${Styles.cardBox}`}>
            <Card
              id={'Netflix'}
              imagenes={[HomeNetflix, InfoNetflix,TrailerNetflix]}
              titulo={'Netflix'}
              descripcion={'Proyecto de Netflix con React y Firebase'}
              url={'https://netproyect.netlify.app/'}
              />
            <Card
              id={'Celulares'}
              imagenes={[LineasCelulares, DetallesCelulares, UsuariosCelulares]}
              titulo={'Sistema de Celulares'}
              descripcion={'Sistema de celulares con React y NodeJS'}
              url={'https://sistemacelulares.onrender.com'}
              />
        </div>
      </div>
    </>
  )
}

export default proyectos