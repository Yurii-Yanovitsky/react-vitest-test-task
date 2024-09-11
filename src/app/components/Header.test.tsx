import { describe, expect, it, vi, Mock } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { useAuth } from "../../features/auth/hooks/useAuth";

vi.mock("../../features/auth/hooks/useAuth", () => ({
  useAuth: vi.fn(),
}));

describe("Header", () => {
  it("should call logout when the Logout button is clicked", () => {
    // Arrange
    const mockLogout = vi.fn();
    (useAuth as Mock).mockReturnValue({ logout: mockLogout });

    // Act
    render(<Header />);
    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    // Assert
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
