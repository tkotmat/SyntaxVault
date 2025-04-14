const API_URL = "https://localhost:7227/api/userApi"; // Заміни на свій API

export const AuthService = {
    async register(username, email, password) {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (!response.ok) {
            throw new Error("Registration failed");
        }

        const data = await response.json();
        return data;
    },
};
