import { Account } from "appwrite";
import { useClient } from "./useClient";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useAuth = () => {
  const client = useClient();
  const account: Account = useMemo(() => new Account(client), [client]);

  const [authenticationState, setAuthenticationState] = useState<
    "notAuthenticated" | "Authenticated" | null
  >(null);

  const login = async (email: string, password: string) => {
    return await account.createEmailSession(email, password).then((value) => {
      setAuthenticationState(null);
      return value;
    });
  };

  const getAuthStatus = useCallback(async () => {
    try {
      const user = await account.get();
      if (user) {
        setAuthenticationState("Authenticated");
      }
    } catch (error) {
      console.error("error authenticating", error);
      setAuthenticationState("notAuthenticated");
    }
  }, [account]);

  useEffect(() => {
    console.log("authenticationState now", authenticationState);
    if (authenticationState === null) getAuthStatus();
  }, [authenticationState, getAuthStatus]);

  const signUp = async (email: string, password: string, name: string) => {
    return await account.create(email, password, name);
  };

  const loginWithAuth0 = () => {
    setAuthenticationState(null);
    return account.createOAuth2Session("auth0", `${window.location.href}/`);
  };

  return {
    login,
    signUp,
    loginWithAuth0,
    isAuthenticated: authenticationState === "Authenticated",
  };
};