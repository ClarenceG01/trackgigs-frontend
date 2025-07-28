import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import Schedule from "./pages/Schedule";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="verify" element={<VerifyEmail />} />
      {/* protected routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<h1>Settings</h1>} />
          <Route path="gigs" element={<h1>Gigs</h1>} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
