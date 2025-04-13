import React from "react";
import "../styles/pages-styles/Home.css";
import Header from "../view/Header";
import BookContainer from "../view/BookContainer";

const Home = () => {
    return (
        <>
            <Header />
            <div className='main-container'>
                <div className='content'>
                    <div
                        className='book-info'
                        style={{
                            height: books.length <= 5 ? "100vh" : "100%",
                        }}
                    >
                        {books.map((book, index) => (
                            <BookContainer
                                key={index}
                                imageSrc={book.imageSrc}
                                title={book.title}
                                description={book.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const books = [
    {
        imageSrc:
            "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
        title: "Книга 1",
        description: "Опис 1...",
    },
    {
        imageSrc:
            "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
        title: "Книга 2",
        description: "Опис 2...",
    },
    {
        imageSrc:
            "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
        title: "Книга 2",
        description: "Опис 2...",
    },
    {
        imageSrc:
            "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
        title: "Книга 2",
        description: "Опис 2...",
    },
    {
        imageSrc:
            "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
        title: "Книга 2",
        description: "Опис 2...",
    },
    {
        imageSrc:
            "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
        title: "Книга 2",
        description: "Опис 2...",
    },
    {
        imageSrc:
            "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
        title: "Книга 2",
        description: "Опис 2...",
    },
];
export default Home;
