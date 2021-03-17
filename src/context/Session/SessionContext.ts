import { createContext, Context } from 'react';

// @Types
import { User } from '../../types/user';
import { Alert } from '../../types/alert';

export type State = {
  user?: User;
  alert?: Alert;
  isAuthenticated?: boolean;
  hasAlert?: boolean;
  isLoading?: boolean;
  onLogin?: (data: User) => void;
  onLogout?: () => void;
  onShowAlert?: (data: Alert) => void;
  onHideAlert?: () => void;
};

export const initialState: State = {};

const SessionContext: Context<State> = createContext(initialState);

export default SessionContext;
