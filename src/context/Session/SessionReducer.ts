// @Types
import { User } from '../../types/user';
import { Alert } from '../../types/alert';

// @Context
import { initialState, State } from './SessionContext';
import { Action, ActionTypes } from './types';

const SessionReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_ATTEMPT: {
      const newState: State = {
        ...state,
        isLoading: true,
      };

      return newState;
    }

    case ActionTypes.LOGIN_SUCCESS: {
      const newState: State = {
        ...state,
        user: action.payload as User,
        isLoading: false,
        isAuthenticated: true,
        hasAlert: false,
      };

      return newState;
    }

    case ActionTypes.LOGIN_FAILURE: {
      return {
        ...initialState,
        hasAlert: true,
        alert: action.payload as Alert,
      };
    }

    case ActionTypes.LOGOUT: {
      return initialState;
    }

    case ActionTypes.SHOW_ALERT: {
      const newState: State = {
        ...state,
        hasAlert: true,
        alert: action.payload as Alert,
      };

      return newState;
    }

    case ActionTypes.HIDE_ALERT: {
      const newState: State = {
        ...state,
        hasAlert: false,
      };

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default SessionReducer;
