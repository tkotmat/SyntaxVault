const API_URL = ""; // Заміни на свій API

export const AuthService = {
    async register(username, email, password) {
        const response = await fetch(`${API_URL}/register`, {
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
