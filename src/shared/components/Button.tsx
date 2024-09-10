import { FC, ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
