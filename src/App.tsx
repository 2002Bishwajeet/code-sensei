import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Login } from "./routes/Login";
import { Home } from "./routes/Home";
import { Landing } from "./routes/Landing";
import { ReactNode } from "react";
import { useAuthContext } from "./context/AuthContext";

const AUTH_PATH = "/login";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/about" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route
        path=""
        element={
          <RootRouter>
            <Outlet />
          </RootRouter>
        }
      >
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

const RootRouter = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = useAuthContext();
  console.debug("Root Router isAuthenticated", isAuthenticated);
  if (!isAuthenticated) {
    console.debug("Not Authenticated", window.location.pathname);
    if (window.location.pathname === AUTH_PATH) {
      return <>{children}</>;
    }
    console.log("Redirecting to /login");

    return <Navigate to={`/about`} />;
  }
  return <>{children}</>;
};

const PublicLayout = () => {
  const authenticated = useAuthContext();
  if (authenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default App;
