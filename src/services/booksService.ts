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

export const getBook = async (id: number) => {
  try {
    const rs = await api.get(`books/${id}`);
    return rs;
  } catch (error) {
    return error.message;
  }
};
