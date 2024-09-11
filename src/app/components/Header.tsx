import { useCallback } from "react";
import { useAuth } from "../../features/auth/hooks/useAuth";
import Button from "../../shared/ui/Button";

const Header = () => {
  const { logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <header className="flex justify-between bg-gray-800 text-white p-4">
      <h1>My App</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </header>
  );
};
export default Header;
