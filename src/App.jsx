import { useState } from "react";
import { RouterProvider } from "react-router";
import { Router } from "./routes/Router";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <LoadingScreen onComplete={() => setLoading(false)} />
  ) : (
    <RouterProvider router={Router} />
  );
}

export default App;
