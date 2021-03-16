export type User = {
  name: string;
  lastName: string;
  email: string;
  age?: string;
};

export type Alert = {
  message: string;
  type: AlertMessageType;
};

export type AlertMessageType = 'danger' | 'success';

export type Session = {
  user?: User;
  isAuthenticated?: boolean;
  hasAlert?: boolean;
  alertCode?: string;
  alertType?: AlertMessageType;
  isLoading?: boolean;
  onLogin?: (data: User) => void;
  onLogout?: () => void;
  onShowAlert?: (data: Alert) => void;
  onHideAlert?: () => void;
};
