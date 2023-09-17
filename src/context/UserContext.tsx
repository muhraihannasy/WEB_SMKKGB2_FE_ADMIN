import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Role {
  name: String;
  menu_permission: any[];
}

interface User {
  fullname: string;
  email: string;
  photo: string;
  role: Role;
}

interface UserContextType {
  user: User | null;
  setCurrentUser: (user: User | null) => void;
  login: (userData: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const setCurrentUser = (user: User | null) => {
    setUser(user);
  };

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value: UserContextType = {
    setCurrentUser,
    user,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
