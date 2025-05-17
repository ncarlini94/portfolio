import { useState } from "react";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Styles from './contacto.module.css'


const Contacto = () => {

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        <section id="contacto" className={`${Styles.section} py-10 transition-colors duration-300 bg-slate-900 text-white`}>
      <div className="container mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold mb-1">Contacto</h2>
          <div className={`w-20 h-1 mx-auto bg-sky-400`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <div className={`px-4 rounded-lg mb-6`}>
              <h3 className="text-xl font-bold">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg mr-4 bg-slate-700 text-sky-400`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Mail</p>
                    <p className="font-medium">ncarlini94@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg mr-4 bg-slate-700 text-sky-400`}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Telefono</p>
                    <p className="font-medium">+54 11 2337-8575</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg mr-4 bg-slate-700 text-sky-400`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Localidad</p>
                    <p className="font-medium">Argentina, Buenos Aires, Capital Federal</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`p-6 rounded-lg bg-slate-800`}>
              <h3 className="text-xl font-bold mb-4">Redes</h3>
              <div className="flex space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-700 text-white hover:bg-teal-700 transition-colors duration-300`}>
                  <span className="font-bold">in</span>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-700 text-white hover:bg-teal-700 transition-colors duration-300`}>
                  <span className="font-bold">gh</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`px-6 rounded-lg bg-slate-800`}>
            <h3 className="text-xl font-bold">Contacto</h3>
            {isSubmitted ? (
              <div className={`p-4 rounded-lg mb-6 bg-green-800/50 text-green-200`}>
                <p className="font-medium flex items-center">
                  <Send size={18} className="mr-2" />
                  ¡Mensaje enviado correctamente! Te responderé pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 text-sm font-medium text-slate-300`}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-teal-500`}
                    placeholder="Juan"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 text-sm font-medium text-slate-300`}
                  >
                    Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-teal-500`}
                    placeholder="Juan@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block mb-2 text-sm font-medium text-slate-300`}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    
                    className={`w-full px-4 py-3 rounded-lg resize-none bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-teal-500 border outline-none transition-colors duration-300`}
                    placeholder="Tu mensaje aquí..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors duration-300 w-full bg-sky-600 text-white hover:bg-sky-700`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Enviar
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