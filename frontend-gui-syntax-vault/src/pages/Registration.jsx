import React from "react";
import { useLocation } from "react-router-dom";
import AccountRegistration from "../view/AccountRegistration";
import Login from "../view/Login";
import Header from "../view/Header";

const Registration = () => {
    const location = useLocation();
    const show = location.state?.show;

    return (
        <>
            <Header />
            {show === "register" && <AccountRegistration />}
            {show === "login" && <Login />}
            {!show && (
                <>
                    <AccountRegistration />
                    <Login />
                </>
            )}
        </>
    );
};

export default Registration;
