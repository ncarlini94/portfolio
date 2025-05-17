import Styles from './footer.module.css'
import { ArrowUp } from 'lucide-react';

const footer = () => {
  return (
    <>
      <footer className={`${Styles.footer} py-8 bg-slate-900 text-white transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-end">
        <a
            href="#home"
            className={`p-3 rounded-full bg-slate-800 text-teal-400 hover:bg-slate-700 transition-colors duration-300 shadow-md`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </a>
          </div>
        <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className={`text-slate-400 text-sm`}>
            © {new Date().getFullYear()} Nicolás, todos los derechos reservados.
          </p>
        </div>
        </div>
      </footer>
    </>
  )
}

export default footer