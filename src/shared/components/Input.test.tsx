import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Input from "./Input";

describe("Input", () => {
  it("renders correctly with given props", () => {
    render(<Input placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  it("applies additional className", () => {
    render(<Input className="custom-class" placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toHaveClass("custom-class");
  });

  it("handles additional props correctly", () => {
    render(<Input type="text" disabled placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toBeDisabled();
  });

  it("forwards refs correctly", () => {
    const ref = createRef<HTMLInputElement>();

    render(<Input ref={ref} placeholder="Enter text" />);

    // Check if ref is assigned correctly
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
