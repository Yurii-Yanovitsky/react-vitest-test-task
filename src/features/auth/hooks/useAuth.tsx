import { useCallback, useEffect, useState } from "react";
import { container } from "tsyringe";
import { IAuthService } from "../../../core/interfaces/IAuthService";

export const useAuth = () => {
  const authService = container.resolve<IAuthService>("IAuthService");
  const [isAuthenticated, setIsAuthenticated] = useState(
    authService.isAuthenticated,
  );

  useEffect(() => {
    const subscription = authService.getAuthStatus().subscribe((value) => {
      setIsAuthenticated(value);
    });
    return () => subscription.unsubscribe();
  }, [authService]);

  const login = useCallback(
    (username: string, password: string) => {
      authService.login(username, password);
    },
    [authService],
  );

  const logout = useCallback(() => {
    authService.logout();
  }, [authService]);

  return {
    isAuthenticated,
    login,
    logout,
  };
};
