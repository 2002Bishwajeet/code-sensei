import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./routes/Login";
import { Home } from "./routes/Home";
import {Landing} from "./routes/Landing";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>
    
  },
    {
        path: "/login",
        element: <Login/>
    },
       {
        path: "/home",
        element: <Home/>
    }
]);

function App()  {
    return <RouterProvider router={router} />;
}

export default App;