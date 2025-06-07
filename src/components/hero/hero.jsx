import Styles from './hero.module.css';
import { ArrowDown } from 'lucide-react';
import useTheme from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import logoDark from '../../assets/logoDark.png';
import logoWhite from '../../assets/logoWhite2.png';
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

const variantesContainer = {
  oculto: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
};

const variantesLetra = {
  oculto: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};



  return (
    <>
      <section
        id="Inicio"
        className={`
          ${Styles.hero}
          ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-100'}
          scroll-mt-20
          relative
          h-134 sm:h-180 lg:h-140 2xl:h-180
          w-full
          font-serif
        `}
      >
        <div
          className={`
            ${Styles.bannerBox}
            absolute
            top-10 px-2 sm:p-0 sm:top-10 sm:left-20 md:top-60 xl:top-70 xl:left-20 2xl:top-95 2xl:left-45
          `}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
            Nicolás Carlini
          </h1>
        <motion.p className={`
          ${Styles.texto}
          text-base md:text-lg max-w-xl mb-8 leading-relaxed ps-2
          ${isDarkMode ? 'text-slate-300' : 'text-slate-900'}
          `} variants={variantesContainer} initial="oculto" animate="visible">
          {t("Hero").split("").map((caracter, indice) => (
          <motion.span key={indice} variants={variantesLetra}>
          {caracter}
        </motion.span>
          ))}
    </motion.p>


        </div>

        <div className={`
          absolute bottom-12 max-sm:left-0 right-0 flex justify-center sm:bottom-20 sm:right-40 md:bottom-0
          lg:right-40
          xl:top-25 2xl:top-40 lg:top-25
          xl:right-10 2xl:right-60
          overflow-hidden
          xl:w-160
        `}>
          <motion.img
            src={isDarkMode ? logoDark : logoWhite}
            alt="Logo"
            className={`
              ${Styles.logoHero}
              ${isDarkMode ? '' : 'inset-shadow-sm inset-shadow-indigo-500 shadow-lg shadow-cyan-900/50'}
              w-60 lg:w-99 lg:h-99 2xl:w-105 2xl:h-105
              rounded-4xl shadow-lg
            `}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", type: "spring", stiffness: 80, damping: 14 }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <a
            href="#habilidades"
            className="animate-bounce rounded-full text-slate-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;