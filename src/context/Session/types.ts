// @Types
import { Session } from '../../types/session';

export enum ActionTypes {
  LOGIN_ATTEMPT = 'LOGIN_ATTEMPT',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT = 'LOGOUT',
}

export type Action = {
  type:
    | ActionTypes.LOGIN_ATTEMPT
    | ActionTypes.LOGIN_SUCCESS
    | ActionTypes.LOGIN_FAILURE
    | ActionTypes.LOGOUT;
  payload: Session;
};
