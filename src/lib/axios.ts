// src/lib/axios.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MOKKY_API_URL || 'https://d20c118218070076.mokky.dev',
  headers: {
    'Content-Type': 'application/json',
  },
});