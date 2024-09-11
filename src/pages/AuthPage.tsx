import { useCallback } from "react";
import LoginForm from "../features/auth/components/LoginForm";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";

const AuthPage = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = useCallback(
    (username: string, password: string) => {
      login(username, password);
    },
    [login],
  );

  if (isAuthenticated) {
    navigate({ to: "/" });
    return <></>;
  }

  return <LoginForm onLogin={handleLogin} />;
};

export default AuthPage;
