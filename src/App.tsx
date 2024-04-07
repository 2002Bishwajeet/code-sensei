import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Login } from "./routes/Login";
import { Home } from "./routes/Home";
import { Landing } from "./routes/Landing";
import { useAuth } from "./hooks/useAuth";
import { ReactNode } from "react";

const AUTH_PATH = "/login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/home" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path=""
          element={
            <ProtectedRoutes>
              <Outlet />
            </ProtectedRoutes>
          }
        >
          <Route path="" element={<Home />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated", isAuthenticated);
  if (!isAuthenticated) {
    console.log(window.location.pathname);
    if (window.location.pathname === AUTH_PATH) {
      return <>{children}</>;
    }
    console.log("Redirecting to /login");

    return <Navigate to={`/home`} />;
  }
  return <>{children}</>;
};

export default App;
