import { createContext, Context } from 'react';

// @Types
import { Session } from '../../types/session';

export const initialState: Session = {
  user: {
    name: '',
    lastName: '',
    email: '',
  },
  isAuthenticated: false,
  hasError: false,
  errorCode: '',
  isLoading: false,
};

const SessionContext: Context<Session> = createContext(initialState);

export default SessionContext;
