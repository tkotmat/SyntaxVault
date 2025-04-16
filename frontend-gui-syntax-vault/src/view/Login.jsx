import React, { useState } from "react";
import "../styles/components-styles/Login.css";
import { UseLoginViewModel } from "../view-model/UseLoginViewModel";

const Login = () => {
    const { formData, errors, handleChange, login, loading, user } =
        UseLoginViewModel();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <div className='login-page'>
            <div className='login-form'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <span className='error'>{errors.email}</span>
                        )}
                    </div>

                    <div className='form-group password-group'>
                        <label htmlFor='password'>Password</label>
                        <div className='password-input-wrapper'>
                            <input
                                type={showPassword ? "text" : "password"}
                                id='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <span
                                className='toggle-password'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>
                        {errors.password && (
                            <span className='error'>{errors.password}</span>
                        )}
                    </div>

                    {errors.general && (
                        <span className='error'>{errors.general}</span>
                    )}

                    <button type='submit' disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {user && (
                    <div className='token-display'>
                        <p>Token: {localStorage.getItem("token")}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
