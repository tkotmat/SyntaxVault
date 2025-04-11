import React from 'react';
import ReactDOM from 'react-dom/client'; // Исправьте импорт
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Создание корня
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);