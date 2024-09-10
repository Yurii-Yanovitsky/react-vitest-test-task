import { FC, ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = forwardRef(
  ({ className, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
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
