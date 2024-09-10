import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "../features/auth/hooks/useAuth";

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate({ to: "/login" });
    return <></>;
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default HomePage;
