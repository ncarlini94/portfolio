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
            <div className={`${Styles.boxNavbar}`}>
                <div id="titulo" className={`${Styles.titulo}`}>N<span className="cursor">_</span></div>
            </div>
        </>
    );
};

export default Navbar;