import { useState } from "react";
import { AuthService } from "../services/AuthorizationService";
import UserModel from "../model/UserModel";

export const UseRegisterViewModel = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.username.trim())
            newErrors.username = "Username is required.";
        if (!emailRegex.test(formData.email))
            newErrors.email = "Invalid email.";
        if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters.";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match.";

        return newErrors;
    };

    const register = async () => {
        setLoading(true);
        setErrors({});

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        try {
            const data = await AuthService.register(
                formData.username,
                formData.email,
                formData.password
            );
            const userModel = new UserModel(data);
            localStorage.setItem("token", data.token);
            setUser(userModel);
        } catch (err) {
            setErrors({ general: "Registration failed: " + err.message });
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        errors,
        handleChange,
        register,
        loading,
        user,
    };
};
