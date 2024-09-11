import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LoginForm from "../components/LoginForm";

const mockOnLogin = vi.fn();

describe("LoginForm", () => {
  it("renders the form elements", () => {
    render(<LoginForm onLogin={mockOnLogin} />);

    expect(screen.getByRole("form")).toBeInTheDocument();

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("captures user input correctly", () => {
    render(<LoginForm onLogin={mockOnLogin} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    expect(screen.getByLabelText(/username/i)).toHaveValue("testUser");
    expect(screen.getByLabelText(/password/i)).toHaveValue("password123");
  });

  it("calls onLogin with correct credentials on form submission", () => {
    render(<LoginForm onLogin={mockOnLogin} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testUser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(mockOnLogin).toHaveBeenCalledWith("testUser", "password123");
  });
});
