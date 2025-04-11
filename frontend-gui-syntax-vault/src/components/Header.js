// src/components/Header.js
import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {

const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(prev => !prev);
};

return (
<header className="header">
    <div className="burger" onClick={toggleMenu}>
        ☰
    </div>

    <nav className={`buttons ${menuOpen ? 'active' : ''}`}>
        <a href="#">Главная</a>
        <a href="#">Книги</a>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
    </nav>

    <div className="profile">П</div>
</header>
);
}

export default Header;