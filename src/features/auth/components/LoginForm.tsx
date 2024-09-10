import { FC, FormEvent, useCallback, useState } from "react";
import * as Form from "@radix-ui/react-form";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onLogin(username, password);
    },
    [onLogin, username, password],
  );

  return (
    <Form.Root
      className="w-80 p-6 border border-gray-300 shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <Form.Field className="grid mb-4" name="username">
        <Form.Label className="text-lg font-semibold text-gray-700 mb-2">
          Username
        </Form.Label>
        <Form.Control asChild>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-4" name="password">
        <Form.Label className="text-lg font-semibold text-gray-700 mb-2">
          Password
        </Form.Label>
        <Form.Control asChild>
          <input
            type="password"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2">
          Login
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default LoginForm;
