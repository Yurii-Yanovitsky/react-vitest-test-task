import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click Me</Button>);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies additional className", () => {
    render(<Button className="custom-class">Click Me</Button>);

    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("custom-class");
  });

  it("forwards refs correctly", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Click Me</Button>);

    // Check if ref is assigned correctly
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("handles additional props", () => {
    render(<Button disabled>Click Me</Button>);

    const button = screen.getByText("Click Me");
    expect(button).toBeDisabled();
  });
});
