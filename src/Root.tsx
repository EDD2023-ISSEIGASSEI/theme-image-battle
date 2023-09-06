import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Home from "./Home";
import "./styles/reset.css";
import "./styles/global.css";
import { SamplePage } from "./pages/sample";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/sample" element={<SamplePage />} />
    </Route>
  )
);

const root = document.getElementById("root");

if (root) {
  const app = createRoot(root);

  app.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
