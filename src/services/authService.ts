import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// @Services
import { api } from './config';

// @Types
import { User } from '../types/user';

// @constants
import { STORAGE_SESSION_KEY } from '../constants/';

export const login = async (data: User) => {
  Keyboard.dismiss();

  try {
    const rs = await api.post('sign_in', data);
    return rs;
  } catch (error) {
    return error.message;
  }
};

export const logout = () => AsyncStorage.removeItem(STORAGE_SESSION_KEY);
