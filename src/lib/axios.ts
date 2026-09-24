import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXt_PUBLIC_MOKKY_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
})