const API_URL = "https://localhost:7227/api/userApi";

export const AuthService = {
    async DownlogBooks() {
        const response = await fetch(`${API_URL}/registri`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Registration failed");
        }

        const dataBook = await response.json();
        return dataBook;
    },
};
