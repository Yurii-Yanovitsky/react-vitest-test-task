import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import HomePage from "../pages/HomePage";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "../features/auth/hooks/useAuth";

// Mock useAuth and useNavigate
vi.mock("../features/auth/hooks/useAuth", () => ({
  useAuth: vi.fn(),
}));

vi.mock("@tanstack/react-router", () => ({
  useNavigate: vi.fn(),
}));

describe("HomePage", () => {
  it("redirects to login if not authenticated", () => {
    (useAuth as Mock).mockReturnValue({
      isAuthenticated: false,
    });

    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);

    render(<HomePage />);

    expect(mockNavigate).toHaveBeenCalledWith({ to: "/login" });
    expect(screen.queryByText("Hello World")).toBeNull();
  });

  it("renders content if authenticated", () => {
    // Mock useAuth to return authenticated
    (useAuth as Mock).mockReturnValue({
      isAuthenticated: true,
    });

    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);

    render(<HomePage />);

    // Check if the content is rendered
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Welcome to the home page!")).toBeInTheDocument();

    // Ensure navigate was not called
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
