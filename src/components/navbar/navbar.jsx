import { useEffect, useState } from 'react';
import Styles from './navbar.module.css';
import Logo from '../../assets/logo.png';
import ThemeToggle from '../themeToggle/themeToggle';
import { X, Menu } from "lucide-react";
import useTheme from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next'

const Navbar = () => {

    const { t, i18n  } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {isDarkMode} = useTheme()


    const sections = ["Inicio", "Habilidades", "Proyectos", "Contacto"];
    const languageList = [
            {
              id:"es",
              name:"Español"
            },
            {
              id:"en",
              name:"Ingles"
            },
            {
              id:"fr",
              name:"Frances"
            }
        ];

    useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);


    const changeLanguage = (e) => {
        const language = e.target.value;
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
  }


const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
  };

    return (
        <>
          <div
          id="navbar"
          className={`
            ${Styles.boxNavbar}
            ${isDarkMode ? 'bg-slate-900/90 backdrop-blur-sm' :
            'text-black bg-slate-300/90 backdrop-blur-sm'}
            flex justify-between
            top-0 left-0
            w-full z-50
            transition-all duration-300  shadow-lg
            `}
          >
            <div className="order-first flex content-center items-center">
              <img src={Logo} className={`${Styles.logo} w-10 h-10 order-first ms-4 shadow-blue-500/50`} />
            </div>

      <div className="hidden md:flex order-last  content-center font-semibold">
        <nav className="flex items-center content-center justify-center h-full me-20 list-none">
          {sections.map((section) => (
            <li key={section} className={`${Styles.navItem} ${isDarkMode ? 'hover:text-slate-300' : 'hover:text-slate-600'} px-3`}>
              <a className={`${Styles.itemList}`} href={`#${section}`}>
                {t(section)}
              </a>
            </li>
          ))}
          <li className='pe-4'>
            <ThemeToggle />
          </li>
            <li>
                <select
              className={`rounded-xl`}
              value={i18n.language}
              onChange={changeLanguage}
            >
            {
              languageList.map((language) => (
                <option
                  key={language.id}
                  className={`text-black`}
                  value={language.id}
                >
                  {t(language.name)}
                </option>
              ))
            }
            </select></li>
        </nav>
      </div>

      <div className="flex md:hidden order-last items-center pe-4">
      <select
              className={`rounded-xl me-2`}
              value={i18n.language}
              onChange={changeLanguage}
            >
            {
              languageList.map((language) => (
                <option
                  key={language.id}
                  className={`text-black`}
                  value={language.id}
                >
                  {t(language.name)}
                </option>
              ))
            }
            </select>
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className={`${isDarkMode ? 'text-white' : 'text-black'} ml-4 p-1 ps-2 rounded-md text-slate-300 `}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`absolute top-full w-full transition-all duration-300 ease-in-out
        ${isMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"}
        bg-slate-900 list-none`}
      >
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-slate-300'} container mx-auto px-6 py-4`}>
          <nav className={` flex flex-col space-y-4`}>
            {sections.map((section) => (
            <li key={section} className={`${Styles.navItem} hover:text-slate-300 px-3`}>
              <a className={`${Styles.itemList}`} href={`#${section}`}>
                {t(section)}
              </a>
            </li>
          ))}
          </nav>
        </div>
      </div>
    </div>

        </>
    );
};

export default Navbar;