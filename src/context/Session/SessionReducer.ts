// @Types
import { Session } from '../../types/session';

// @Context
import { initialState } from './SessionContext';
import { Action, ActionTypes } from './types';

const SessionReducer = (state: Session = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_ATTEMPT: {
      const newState: Session = {
        ...state,
        isLoading: true,
      };

      return newState;
    }

    case ActionTypes.LOGIN_SUCCESS: {
      const newState: Session = {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true,
      };

      return newState;
    }

    case ActionTypes.LOGIN_FAILURE:
    case ActionTypes.LOGOUT: {
      return {
        ...initialState,
        ...action.payload,
      };
    }

    case ActionTypes.SHOW_ALERT:
    case ActionTypes.HIDE_ALERT: {
      const newState: Session = {
        ...state,
        ...action.payload,
      };

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default SessionReducer;
