import { Outlet } from "@tanstack/react-router";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1>My App</h1>
      </header>

      <main className="flex flex-grow p-4 items-center justify-center">
        {children || <Outlet />}
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <p>Footer Content</p>
      </footer>
    </div>
  );
};
