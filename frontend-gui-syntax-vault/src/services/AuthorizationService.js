const API_URL = "https://localhost:7227/api/userApi";

export const AuthService = {
    async register(username, email, password) {
        const response = await fetch(`${API_URL}/registri`, {
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

    async login(email, password) {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error("Login failed");
        }

        const data = await response.json();
        console.log(data);
        return data;
    },
};
