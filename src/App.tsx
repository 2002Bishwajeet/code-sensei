import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Login } from "./routes/Login";
import { Home } from "./routes/Home";
import { Landing } from "./routes/Landing";
import { useAuthContext } from "./context/AuthContext";
import { Chat } from "./routes/Chat";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/about" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="">
        <Route index element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}

// const RootRouter = () => {
//   const isAuthenticated = useAuthContext();
//   console.debug("Root Router isAuthenticated", isAuthenticated);
//   if (!isAuthenticated) {
//     console.debug("Not Authenticated", window.location.pathname);

//     return <Navigate to={`/about`} />;
//   }
//   return <Outlet />;
// };

const PublicLayout = () => {
  const authenticated = useAuthContext();
  if (authenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default App;
