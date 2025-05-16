import React from 'react'
import Styles from './habilidades.module.css'
import ReactImg from '../../../assets/react.svg'
import NodeImg from '../../../assets/node.svg'
import ExpressImg from '../../../assets/expressjs.svg'
import  BootstrapImg from  '../../../assets/bootstrap.svg'
import Css3Img from '../../../assets/css3.svg'
import MongodbImg from '../../../assets/mongodb.svg'
import MysqlImg from '../../../assets/mysql.svg'


const habilidades = () => {



  return (
    <>
    <section id="habilidades">
        <div className={`${Styles.container} bg-slate-900`}>
        <h2 style={{color:'white',textAlign:'center', padding:'50px 0 50px 0'}}>Habilidades</h2>
          <div className={`${Styles.listBox}`}>
            <div className={`${Styles.imgBox}`}>
              <img className={`${Styles.img}`} src={ReactImg}/>
              <p>React JS</p>
            </div>
            <div className={`${Styles.imgBox}`}>
              <img className={`${Styles.img}`} src={NodeImg}/>
              <p>Node JS</p>
            </div>
            <div className={`${Styles.imgBox}`}>
              <img className={`${Styles.img}`} src={ExpressImg}/>
              <p>Express JS</p>
            </div>
            <div className={`${Styles.imgBox}`}>
              <img className={`${Styles.img}`} src={BootstrapImg}/>
              <p>Bootstrap</p>
            </div>
            <div className={`${Styles.imgBox}`}>
              <img className={`${Styles.img}`} src={Css3Img}/>
              <p>CSS 3</p>
            </div>
            <div className={`${Styles.imgBox}`}>
              <img className={`${Styles.img}`} src={MongodbImg}/>
              <p>Mongo DB</p>
            </div>
            <div className={`${Styles.imgBox}`}>
              <img className={`${Styles.img}`} src={MysqlImg}/>
              <p>SQL</p>
            </div>
        </div>
        </div>
        </section>
    </>
  )
}

export default habilidades