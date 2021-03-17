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
  globalLoading?: boolean;
  onLogin?: (data: User) => void;
  onLogout?: () => void;
  onShowAlert?: (data: Alert) => void;
  onHideAlert?: () => void;
  onShowLoading?: () => void;
  onHideLoading?: () => void;
};

export const initialState: State = {};

const SessionContext: Context<State> = createContext(initialState);

export default SessionContext;
