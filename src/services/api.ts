import axios from 'axios';

export const api = axios.create({
    //baseURL: 'https://pit-example.onrender.com',
    baseURL: 'http://192.168.0.12:3000',
});
