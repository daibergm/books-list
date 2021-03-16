import React, { useReducer, useEffect } from 'react';
import { isEmpty } from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

// @services
import { login, logout } from '../../services';

// @Context
import SessionContext, { initialState } from './SessionContext';
import SessionReducer from './SessionReducer';
import { ActionTypes } from './types';

// @types
import { User, Alert } from '../../types/session';

// @constants
import { STORAGE_SESSION_KEY } from '../../constants/';

type Props = {
  children: JSX.Element;
};

function SessionState({ children }: Props): JSX.Element {
  const [state, dispatch] = useReducer(SessionReducer, initialState);

  useEffect(() => {
    const validateSession = async () => {
      dispatch({
        type: ActionTypes.LOGIN_ATTEMPT,
        payload: {},
      });
      const session = await AsyncStorage.getItem(STORAGE_SESSION_KEY);

      if (session) {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: JSON.parse(session),
        });
      } else {
        dispatch({
          type: ActionTypes.LOGOUT,
          payload: {},
        });
      }
    };
    validateSession();
  }, []);

  /**
   * Use to login into the app
   * @param {User} data User data to login
   */
  const onLogin = async (data: User): Promise<void> => {
    if (!state.isLoading) {
      dispatch({ type: ActionTypes.LOGIN_ATTEMPT, payload: {} });
      const rs = await login(data);

      if (!isEmpty(rs.data)) {
        await AsyncStorage.setItem(
          STORAGE_SESSION_KEY,
          JSON.stringify(rs.data),
        );

        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: {
            user: rs.data,
          },
        });

        return;
      }

      dispatch({
        type: ActionTypes.LOGIN_FAILURE,
        payload: {
          hasAlert: true,
          alertCode: rs,
          alertType: 'danger',
        },
      });
    }
  };

  /**
   * Use to delete session in the app
   */
  const onLogout = async (): Promise<void> => {
    await logout();
    dispatch({
      type: ActionTypes.LOGOUT,
      payload: {},
    });
  };

  const onShowAlert = (data: Alert) => {
    dispatch({
      type: ActionTypes.SHOW_ALERT,
      payload: {
        hasAlert: true,
        alertCode: data.message,
        alertType: data.type,
      },
    });
  };

  const onHideAlert = () => {
    dispatch({
      type: ActionTypes.SHOW_ALERT,
      payload: {
        hasAlert: false,
        alertCode: '',
        alertType: 'success',
      },
    });
  };

  return (
    <SessionContext.Provider
      value={{ ...state, onLogin, onLogout, onShowAlert, onHideAlert }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionState;
