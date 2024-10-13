
        import { Auth, IUserEntity } from '@transportus/core';
import { useSession } from 'next-auth/react';
import { createContext, ReactNode, useState } from 'react';

type AuthenticationContextType = {
  setUserData: (data: IUserEntity) => void;
  getUserData: () => IUserEntity | null;
  getUserToken: () => Auth;
  removeUserData: () => void;
};

export const AuthenticationContext = createContext(
  {} as AuthenticationContextType,
);

export function AuthenticationProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<IUserEntity | null>(null);
  const { data: session } = useSession();

  function setUserData(data: IUserEntity) {
    setCurrentUser(data);
  }

  function getUserData() {
    return currentUser;
  }

  function getUserToken() {
    return session?.token as Auth;
  }

  function removeUserData() {
    setCurrentUser(null);
  }

  return (
    <AuthenticationContext.Provider
      value={{
        getUserData,
        getUserToken,
        setUserData,
        removeUserData,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

    