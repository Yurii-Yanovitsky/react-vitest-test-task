import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach, Mock } from "vitest";
import AuthPage from "./AuthPage";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";

vi.mock("@tanstack/react-router");
vi.mock("../features/auth/hooks/useAuth");

describe("AuthPage", () => {
  const mockNavigate = vi.fn();
  const mockLogin = vi.fn();

  beforeEach(() => {
    mockNavigate.mockReset();
    mockLogin.mockReset();

    (useNavigate as Mock).mockReturnValue(mockNavigate);
  });

  it("renders the login form when the user is not authenticated", () => {
    (useAuth as Mock).mockReturnValue({
      isAuthenticated: false,
      login: mockLogin,
    });

    render(<AuthPage />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("calls login function with the correct credentials", () => {
    (useAuth as Mock).mockReturnValue({
      isAuthenticated: false,
      login: mockLogin,
    });

    render(<AuthPage />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(mockLogin).toHaveBeenCalledWith("testUser", "password123");
  });

  it("navigates to the home page when the user is authenticated", () => {
    (useAuth as Mock).mockReturnValue({
      isAuthenticated: true,
      login: mockLogin,
    });

    render(<AuthPage />);

    expect(mockNavigate).toHaveBeenCalledWith({ to: "/" });
  });
});
