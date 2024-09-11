import { PropsWithRef, forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, PropsWithRef<InputProps>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent ${className || ""}`}
        {...props}
      />
    );
  },
);

export default Input;
