import React from 'react';
import './styles/App.css';
import Header from './components/Header'; // Импорт компонента Header
import Home from './pages/Home';

function App() {
return (
<div className="App">
    <Header /> 
    <main>
        <Home />
    </main>
</div>
);
}

export default App;