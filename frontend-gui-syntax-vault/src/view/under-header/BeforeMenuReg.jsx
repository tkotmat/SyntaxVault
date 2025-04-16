import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components-styles/BeforeMenuReg.css";

const BeforeMenuReg = ({ onClose }) => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/Registration", { state: { show: "login" } });
    };

    const goToRegister = () => {
        navigate("/Registration", { state: { show: "register" } });
    };

    return (
        <div className='before-authorization'>
            <div className='auth-item' onClick={goToLogin}>
                Авторизация
            </div>
            <div className='auth-item' onClick={goToRegister}>
                Регистрация
            </div>
        </div>
    );
};

export default BeforeMenuReg;
