import Styles from './hero.module.css';
import logoHero from '../../assets/banner.png';
import { ArrowDown } from 'lucide-react';
import useTheme from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next';

const Hero = () => {

  const {t} = useTranslation()
  const {isDarkMode} = useTheme()

  return (
    <>
    <section id="home" className={`${Styles.hero} ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-100'} scroll-mt-30 relative sm:h-180 2xl:h-180 w-full`}>
        <div className={`${Styles.bannerBox} absolute sm:top-10 sm:left-20 md:top-60 xl:top-60 xl:left-20 2xl:top-85 2xl:left-45`}>
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>{t("Hola")}</p>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight ps-2`}>Nicolás Carlini </h1>
            <p className={`${Styles.texto} text-base md:text-lg max-w-xl mb-8 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-900'} `}>{t("Hero")}</p>
        </div>
        <div className={`absolute sm:bottom-20 sm:right-40 md:bottom-0 xl:top-25 xl:right-40 2xl:top-40 2xl:right-60`}>
            <img src={logoHero} alt="Logo" className={`${Styles.logoHero} ${isDarkMode ? '' : 'inset-shadow-sm inset-shadow-indigo-500 shadow-lg shadow-cyan-900/50'} lg:w-99 lg:h-99 2xl:w-105 2xl:h-105 rounded-full shadow-lg`}/>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <a
            href="#habilidades"
            className={`animate-bounce rounded-full text-slate-400 hover:text-teal-400 transition-colors duration-300`}
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </a>
        </div>
    </section>
    </>
  )
}

export default Hero