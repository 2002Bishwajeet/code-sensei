import { createContext, useContext } from "react";

import { useAuth } from "../hooks/useAuth";

const AuthContext = createContext<boolean>(false);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  return (
    <AuthContext.Provider value={isAuthenticated}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
