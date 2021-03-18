// @Types
import { User } from '../../types/user';
import { Alert } from '../../types/alert';

export enum ActionTypes {
  LOGIN_ATTEMPT = 'LOGIN_ATTEMPT',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT = 'LOGOUT',
  SHOW_ALERT = 'SHOW_ALERT',
  HIDE_ALERT = 'HIDE_ALERT',
  SHOW_LOADING = 'SHOW_LOADING',
  HIDE_LOADING = 'HIDE_LOADING',
}

export type Action = {
  type:
    | ActionTypes.LOGIN_ATTEMPT
    | ActionTypes.LOGIN_SUCCESS
    | ActionTypes.LOGIN_FAILURE
    | ActionTypes.LOGOUT
    | ActionTypes.SHOW_ALERT
    | ActionTypes.HIDE_ALERT
    | ActionTypes.SHOW_LOADING
    | ActionTypes.HIDE_LOADING;
  payload?: User | Alert;
};
