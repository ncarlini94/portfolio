import React from 'react'
import Banner from '../../assets/banner.webp';
import Styles from './banner.module.css';

const banner = () => {
  return (
    <>
        <div className={Styles.bannerBox}>
            <p className={`${Styles.texto}`}>En búsqueda de oportunidades para aprender y crecer, comprometido con la mejora continua. Listo para asumir nuevos desafíos laborales y contribuir al éxito de los proyectos.</p>
            <img src={Banner} className={Styles.banner} alt="Banner" />
        </div>
    </>
  )
}

export default banner