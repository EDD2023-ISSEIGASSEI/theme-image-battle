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
import { WaitingRoomScreen } from "./components/screens/WaitingRoomScreen";
import { RoomPage } from "./pages/auth/room";

// サンプルデータを返す関数
const userLoader = async () => {
  try {
    const res = await fetch("/api/user", {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const json = await res.json();
    return json;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} loader={userLoader} />

      <Route path="/auth/login" element={<LoginPage />} loader={userLoader} />
      <Route path="/auth/otp" element={<OtpPage />} loader={userLoader} />
      <Route
        path="/auth/checkOtp"
        element={<CheckOtpPage />}
        loader={userLoader}
      />

      <Route path="/auth/signup" element={<SignupPage />} loader={userLoader} />
      <Route path="/auth/room" element={<RoomPage />} loader={userLoader} />

      <Route
        path="/createRoom"
        element={<CreateRoomPage />}
        loader={userLoader}
      />
      <Route
        path="/explanationOTP"
        element={<ExlanationOTPPage />}
        loader={userLoader}
      />
      <Route
        path="/searchRoom"
        element={<SearchRoomPage />}
        loader={userLoader}
      />

      <Route
        path="/waitingRoom/:id"
        element={<WaitingRoomScreen />}
        loader={userLoader}
      />

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
