import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./routes/Login";
import { Home } from "./routes/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
    
  },
    {
        path: "/login",
        element: <Login/>
    }
]);

function App()  {
    return <RouterProvider router={router} />;
}

export default App;