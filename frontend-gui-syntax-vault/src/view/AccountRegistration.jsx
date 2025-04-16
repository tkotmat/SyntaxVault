import React, { useState } from "react";
import "../styles/components-styles/AccountRegistration.css";
import { UseRegisterViewModel } from "../view-model/UseRegisterViewModel";

const AccountRegistration = () => {
    const { formData, errors, handleChange, register, loading } =
        UseRegisterViewModel();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        register();
    };

    return (
        <div className='registration-page'>
            <div className='registration-form'>
                <h1>Create Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && (
                            <span className='error'>{errors.username}</span>
                        )}
                    </div>

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

                    <div className='form-group password-group'>
                        <label htmlFor='confirmPassword'>
                            Confirm Password
                        </label>
                        <div className='password-input-wrapper'>
                            <input
                                type={showPassword ? "text" : "password"}
                                id='confirmPassword'
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <span
                                className='toggle-password'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>
                        {errors.confirmPassword && (
                            <span className='error'>
                                {errors.confirmPassword}
                            </span>
                        )}
                    </div>

                    {errors.general && (
                        <span className='error'>{errors.general}</span>
                    )}

                    <button type='submit' disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AccountRegistration;
