import {
  ButtonHTMLAttributes,
  PropsWithChildren,
  PropsWithRef,
  forwardRef,
} from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button = forwardRef<HTMLButtonElement, PropsWithRef<ButtonProps>>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all ${className || ""}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
