import { useTranslation } from 'react-i18next';
import useTheme from '../../hooks/useTheme';
import Styles from './footer.module.css'
import { ArrowUp } from 'lucide-react';

const Footer = () => {

  const { t } = useTranslation()
  const { isDarkMode } = useTheme()

  return (
    <>
      <footer className={`${Styles.footer} ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-100'} py-8 transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-end">
        <a
            href="#home"
            className={`${isDarkMode ? 'bg-slate-800 text-teal-400 hover:bg-slate-700' : 'bg-slate-300 text-teal-100 hover:bg-slate-400 drop-shadow-2xl'} p-3 rounded-full   transition-colors duration-300 shadow-md`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </a>
          </div>
        <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-black'} text-sm`}>
            © {new Date().getFullYear()} {t("Footer")}
          </p>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer