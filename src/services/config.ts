import axios from 'axios';

// @Constants
import { BASE_URL } from '../constants/';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
