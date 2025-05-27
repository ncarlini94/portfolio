import { useState } from "react";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Styles from './contacto.module.css'
import useTheme from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";


const Contacto = () => {

    const { t } = useTranslation();
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { isDarkMode } = useTheme()

      const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message is too short (minimum 10 characters)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };


  return (
    <>
        <section id="Contacto" className={`${Styles.section} ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-100'} sm:py-10 2xl:h-180 lg:h-140 2xl:py-10 lg:py-12 transition-colors duration-300`}>
      <div className="container mx-auto content-center max-sm:py-2">
        <div className="text-center 2xl:mb-10 lg:mb-4">
          <h2 className="text-3xl font-bold mb-1">{t("Contacto")}</h2>
          <div className={`w-20 h-1 mx-auto bg-sky-400`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto max-sm:pt-6 max-sm:px-2">
          <div>
            <div className={`sm:px-0 max-sm:pt-6 px-4 rounded-lg mb-2`}>
              <h3 className="text-xl font-bold">{t("Informacion")}</h3>
              <div className="space-y-4 pt-1">
                <div className="flex items-center">
                  <div className={`${isDarkMode ? 'bg-slate-700 text-sky-400' : 'bg-slate-400 text-slate-100'} p-3 rounded-lg mr-4`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className={`${isDarkMode ? 'text-sm text-slate-500' : ''}`}>{t("Mail")}</p>
                    <p className="font-medium">ncarlini94@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`${isDarkMode ? 'bg-slate-700 text-sky-400' : 'bg-slate-400 text-white'} p-3 rounded-lg mr-4`}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{t("Telefono")}</p>
                    <p className="font-medium">+54 11 2337-8575</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`${isDarkMode ? 'bg-slate-700 text-sky-400' : 'bg-slate-400 text-white'} p-3 rounded-lg mr-4`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{t("Localidad")}</p>
                    <p className="font-medium">Argentina, Buenos Aires, Capital Federal</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${isDarkMode ? ' bg-slate-800' : 'bg-slate-400 text-white drop-shadow-2xl'} p-6 rounded-lg`}>
              <h3 className="text-xl font-bold">{t("Redes")}</h3>
              <div className="flex space-x-4">
                <div className={`${isDarkMode ? 'bg-slate-700 text-white hover:bg-sky-700' : 'bg-slate-300 text-slate-600 hover:bg-slate-100'} w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300`}>
                  <span className="font-bold">in</span>
                </div>
                <div className={`${isDarkMode ? 'bg-slate-700 text-white hover:bg-sky-700' : 'bg-slate-300 text-slate-600 hover:bg-slate-100'} w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300`}>
                  <span className="font-bold">gh</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-400 drop-shadow-2xl'} px-6 max-sm:py-6 rounded-lg `}>
            <h3 className={`${isDarkMode ? 'text-white' : 'text-white'} text-xl font-bold`}>{t("Contacto")}</h3>
            {isSubmitted ? (
              <div className={`p-4 rounded-lg mb-6 bg-green-800/50 text-green-200`}>
                <p className="font-medium flex items-center">
                  <Send size={18} className="mr-2" />
                  {t("Exito")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <div className="flex items-center">
                  <label
                    htmlFor="name"
                    className={`${isDarkMode ? 'font-medium ' : 'font-bold'} flex mb-2 text-sm text-slate-300 pe-3`}
                  >
                    {t("Nombre")}
                  </label>
                    {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                    </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${isDarkMode ? 'bg-slate-700 text-white placeholder:text-slate-400 border-slate-600' : 'bg-slate-200 text-black'} w-full px-4 py-3 rounded-lg focus:border-teal-500`}
                    placeholder="Juan"
                  />
                </div>

                <div>
                <div className="flex items-center">
                  <label
                    htmlFor="email"
                    className={`${isDarkMode ? 'font-medium ' : 'font-bold'} flex mb-2 text-sm text-slate-300 pe-3`}
                  >
                    {t("Mail")}
                  </label>
                  {errors.email && (
                    <p className=" text-sm text-red-500">{errors.email}</p>
                  )}
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${isDarkMode ? 'bg-slate-700 text-white placeholder:text-slate-400 border-slate-600' : 'bg-slate-200 text-black'} w-full px-4 py-3 rounded-lg focus:border-teal-500`}
                    placeholder="Juan@example.com"
                  />
                </div>
                <div>
                <div className="flex items-center">
                  <label
                    htmlFor="message"
                    className={`${isDarkMode ? 'font-medium ' : 'font-bold'} flex mb-2 text-sm text-slate-300 pe-3`}
                  >
                    {t("Mensaje")}
                  </label>
                  {errors.message && (
                    <p className=" text-sm text-red-500">{errors.message}</p>
                  )}
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}

                    className={`${isDarkMode ? 'bg-slate-700 text-white placeholder:text-slate-400 border-slate-600' : 'bg-slate-200 text-black'} w-full px-4 py-3 rounded-lg resize-none focus:border-teal-500 border outline-none transition-colors duration-300`}
                    placeholder="Tu mensaje aquí..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded-lg font-medium flex items-center justify-center transition-colors duration-300 w-full bg-sky-600 text-white hover:bg-sky-700`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t("Enviando")}
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      {t("Enviar")}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contacto