import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID gt7muCnD917G-P09iIu0MAqguMN019rfBA8be1XkAfA"
    }
});

