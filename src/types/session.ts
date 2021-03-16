export type User = {
  name: string;
  lastName: string;
  email: string;
  age?: string;
};

export type Session = {
  user?: User;
  isAuthenticated?: boolean;
  hasError?: boolean;
  errorCode?: string;
  isLoading?: boolean;
  onLogin?: (data: User) => void;
  onLogout?: () => void;
};
