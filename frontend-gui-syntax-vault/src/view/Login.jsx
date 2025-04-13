import React, { useState } from "react";
import "../styles/components-styles/Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email.";
        }
        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        console.log("Login successful:", formData);
        // Add actual login logic here
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

                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
