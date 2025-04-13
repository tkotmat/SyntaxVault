import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main-styles/App.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Registration' element={<Registration />} />
            </Routes>
        </Router>
    );
};

export default App;
