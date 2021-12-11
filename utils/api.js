import axios from 'axios';

const api = axios.create({
    baseURL: "https://heroku-strapi-backend.herokuapp.com/"
});

api.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default api;
