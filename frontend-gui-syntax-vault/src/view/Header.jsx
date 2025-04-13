// src/components/Header.js
import React, { useState } from "react";
import "../styles/components-styles/Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <header className='header' onMouseLeave={handleMouseLeave}>
            <div className='burger' onClick={toggleMenu}>
                ☰
            </div>

            <nav className={`buttons ${menuOpen ? "active" : ""}`}>
                <a href='#' onMouseEnter={handleMouseEnter}>
                    Главная
                </a>

                {isHovered && (
                    <div className='submenu'>
                        <a href='#'>Подменю 1</a>
                        <a href='#'>Подменю 2</a>
                    </div>
                )}

                <a href='#'>О нас</a>
            </nav>

            <div className='profile'>П</div>
        </header>
    );
};

export default Header;
