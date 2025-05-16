import React, { useEffect, useState } from 'react';
import Styles from './navbar.module.css';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    const text = "NICO";
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const logo = document.getElementById("titulo");
        const cursor = document.querySelector(".cursor");

        if (index <= text.length) {
            logo.innerHTML = text.slice(0, index) + (index < text.length ? '<span class="cursor">_</span>' : '');
            const timeout = setTimeout(() => setIndex(index + 1), 300);
            return () => clearTimeout(timeout);
        } else if (cursor) {
            cursor.style.animation = "none";
        }
    }, [index, text]);

    return (
        <>
            <div id='navbar' className={`${Styles.boxNavbar} flex justify-between top-0 left-0 w-full z-50 transition-all duration-300 bg-slate-900/90 backdrop-blur-sm shadow-lg`}>
                <div id="titulo" className={`${Styles.titulo} ms-4 order-first m-0 p-0`}>
                    N<span className="cursor">_</span>
                </div>
                <div className='order-last'>
                    <ul className='flex items-center content-center justify-center h-full me-8'>
                        <li className={`${Styles.navItem} hover:text-slate-300 px-2`}>
                            <a className={`${Styles.itemList}`} href='#home'>Home</a>
                        </li>
                        <li className={`${Styles.navItem} hover:text-slate-300 px-2`}>
                            <a className={`${Styles.itemList}`} href='#habilidades'>Habilidades</a>
                        </li>
                        <li className={`${Styles.navItem} hover:text-slate-300 px-2`}>
                            <a className={`${Styles.itemList}`} href='#proyectos'>Proyectos</a>
                        </li>
                        <li className={`${Styles.navItem} hover:text-slate-300 px-2`}>
                            <a className={`${Styles.itemList}`} href='#contacto'>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;