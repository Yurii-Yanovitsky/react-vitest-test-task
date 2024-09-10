import "./App.css";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";
import { Layout } from "./Layout";

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
