import Styles from './hero.module.css';
import logoHero from '../../assets/banner.png';
import { ArrowDown } from 'lucide-react';

const banner = () => {
  return (
    <>
    <section id="home" className={`${Styles.hero} scroll-mt-20 relative lg:size-190 bg-slate-900 text-white`}>
        <div className={`${Styles.bannerBox} absolute sm:top-20 xl:top-68 left-35 size-160`}>
            <p className={`text-lg mb-4`}>Hola, mi nombre es</p>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight`}>Nicolás Developer</h1>
            <p className={`${Styles.texto} text-base md:text-lg max-w-xl mb-8 leading-relaxed text-slate-300`}>En búsqueda de oportunidades para aprender y crecer, comprometido con la mejora continua. Listo para asumir nuevos desafíos laborales y contribuir al éxito de los proyectos.</p>
        </div>
        <div className={`absolute xl:top-25 xl:right-50`}>
            <img src={logoHero} alt="Logo" className={`${Styles.logoHero} lg:w-99 h-99 rounded-full shadow-lg`}/>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a
            href="#habilidades"
            className={`animate-bounce p-2 rounded-full text-slate-400 hover:text-teal-400 transition-colors duration-300`}
            aria-label="Scroll down"
          >
            <ArrowDown size={28} />
          </a>
        </div>
    </section>
    </>
  )
}

export default banner