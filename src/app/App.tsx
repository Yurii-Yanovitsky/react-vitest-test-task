import "./App.css";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";
import { Layout } from "./Layout";

function App() {
  return (
    <Layout>
      <RouterProvider basepath="/react-vitest-test-task" router={router} />
    </Layout>
  );
}

export default App;
