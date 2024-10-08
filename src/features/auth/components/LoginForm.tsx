import { FC, FormEvent, useCallback, useState } from "react";
import * as Form from "@radix-ui/react-form";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";

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
      role="form"
      className="w-80 p-6 border border-gray-300 shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <Form.Field className="grid mb-4" name="username">
        <Form.Label className="text-lg font-semibold text-gray-700 mb-2">
          Username
        </Form.Label>
        <Form.Control asChild>
          <Input
            type="text"
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
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <Button className="w-full">Login</Button>
      </Form.Submit>
    </Form.Root>
  );
};

export default LoginForm;
