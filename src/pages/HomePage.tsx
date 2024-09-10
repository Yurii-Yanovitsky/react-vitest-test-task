import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "../features/auth/hooks/useAuth";

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate({ to: "/login" });
    return <></>;
  }

  return <div>HomePage</div>;
};

export default HomePage;
