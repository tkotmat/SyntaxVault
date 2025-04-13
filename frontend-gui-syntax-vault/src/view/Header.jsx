import React, { useState } from "react";
import "../styles/components-styles/Header.css";
import { useNavigate } from "react-router-dom";
import BeforeAuthorization from "./under-header/BeforeMenuReg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleHomeClick = () => {
        navigate("/");
    };

    const togglePopup = () => {
        setShowPopup((prev) => !prev);
    };

    return (
        <header className='header' onMouseLeave={handleMouseLeave}>
            <div className='burger' onClick={toggleMenu}>
                ☰
            </div>

            <nav className={`buttons ${menuOpen ? "active" : ""}`}>
                <a
                    href='#'
                    onMouseEnter={handleMouseEnter}
                    onClick={handleHomeClick}
                >
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

            <div className='profile' onClick={togglePopup}>
                П
                {showPopup && (
                    <BeforeAuthorization onClose={() => setShowPopup(false)} />
                )}
            </div>
        </header>
    );
};

export default Header;
