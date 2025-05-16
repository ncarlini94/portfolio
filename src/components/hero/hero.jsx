import Styles from './hero.module.css';
import logoHero from '../../assets/banner.png';

const banner = () => {
  return (
    <>
    <section id="home" className={`${Styles.hero} scroll-mt-20 relative size-140 bg-slate-900 text-white`}>
        <div className={`${Styles.bannerBox} absolute top-52 left-30 size-160`}>
            <p className={`text-lg mb-4`}>Hola, mi nombre es</p>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight`}>Nicolás Developer</h1>
            <p className={`${Styles.texto} text-base md:text-lg max-w-xl mb-8 leading-relaxed text-slate-300`}>En búsqueda de oportunidades para aprender y crecer, comprometido con la mejora continua. Listo para asumir nuevos desafíos laborales y contribuir al éxito de los proyectos.</p>
        </div>
        <div className={`absolute top-20 right-30`}>
            <img src={logoHero} alt="Logo" className={`${Styles.logoHero} w-96 h-96 rounded-full shadow-lg`}/>
        </div>
    </section>
    </>
  )
}

export default banner