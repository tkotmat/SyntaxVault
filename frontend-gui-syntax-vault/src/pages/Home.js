// src/components/Header.js
import React from 'react';
import '../styles/Home.css';

function Header() {
return (
<div class="main-container">
    <div class="content">
        <div class="book-info">
            <h2>Информация о книгах</h2>
            <p>Здесь будет текст с информацией о книгах. Например, описание книг, их авторы, жанры и другие подробности.</p>
            <p>Можно добавить ещё много информации, включая изображения обложек, рейтинги и так далее.</p>
        </div>

        <div class="side-space">
        </div>
    </div>
</div>
);
}

export default Header;