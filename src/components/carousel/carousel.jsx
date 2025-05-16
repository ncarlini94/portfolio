import React from 'react'
import Styles from './carousel.module.css'

const Carousel = ({id, imagen}) => {


return (
    <>
        <div id={id} className="carousel slide carousel-fade"  data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2500">
                    <img src={imagen[0]} className={`${Styles.img} d-block w-100`} alt="img1"/>
                </div>
                {
                    imagen && imagen.slice(1).map((img, index) => {
                        return (
                            <div className="carousel-item" key={index} data-bs-interval="2500">
                                <img src={img} className={`${Styles.img} d-block w-100`} alt={`img${index + 2}`}/>
                            </div>
                        )
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Antes</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    </>
)
}

export default Carousel