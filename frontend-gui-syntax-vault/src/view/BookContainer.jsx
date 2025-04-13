import React from "react";
import "../styles/components-styles/BookContainer.css"; // подключение обычного CSS

const BookContainer = ({ imageSrc, title, description }) => {
    return (
        <div className='book'>
            <img src={imageSrc} alt={title} className='image' />
            <div className='book-text'>
                <h2 className='book-title'>{title}</h2>
                <p className='book-description'>{description}</p>
            </div>
        </div>
    );
};

export default BookContainer;
