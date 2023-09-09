import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";
import { SamplePage } from "./pages/sample";
import { SampleScreenPage } from "./pages/sampleScreen";
import { LoginPage } from "./pages/auth/login";
import { OtpPage } from "./pages/auth/otp";
import { SignupPage } from "./pages/auth/signup";
import { CreateRoomPage } from "./pages/createRoom";
import { ExlanationOTPPage } from "./pages/explanationOTP";
import { SearchRoomPage } from "./pages/searchRoom";
import { HomePage } from "./Home";
import { CheckOtpPage } from "./pages/auth/checkOtp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />

      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/otp" element={<OtpPage />} />
      <Route path="/auth/checkOtp" element={<CheckOtpPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />

      <Route path="/createRoom" element={<CreateRoomPage />} />
      <Route path="/explanationOTP" element={<ExlanationOTPPage />} />
      <Route path="/searchRoom" element={<SearchRoomPage />} />

      <Route path="/sample" element={<SamplePage />} />
      <Route path="/sampleScreens" element={<SampleScreenPage />} />
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
