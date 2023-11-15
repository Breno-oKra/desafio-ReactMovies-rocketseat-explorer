import axios from "axios";

export const api = axios.create({
    baseURL:"https://new-api-react-movies.onrender.com"
})