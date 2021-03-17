// @Services
import { api } from './config';

export const getBooks = async () => {
  try {
    const rs = await api.get('books');
    return rs;
  } catch (error) {
    return error.message;
  }
};
