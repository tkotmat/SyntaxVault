import { useState } from "react";
import { AuthService } from "../services/AuthorizationService";
import UserModel from "../model/UserModel";

export const UseLoginViewModel = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email.";
        }
        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        return newErrors;
    };

    const login = async () => {
        setLoading(true);
        setErrors({});

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        try {
            const data = await AuthService.login(
                formData.email,
                formData.password
            );
            const userModel = new UserModel(data);
            localStorage.setItem("token", data.token);
            setUser(userModel);
            console.log(data);
        } catch (err) {
            setErrors({ general: "Login failed: " + err.message });
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        errors,
        handleChange,
        login,
        loading,
        user,
    };
};

export default UseLoginViewModel;
