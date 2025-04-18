import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout /> ,
      children: [
        {
          path: "/",
          element: <h1>Home Page</h1> 
        },
        {
          path: "/edit",
          element: <h1>Edit Profile Page</h1> 
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <Signup />
        },
      ]
    },
])

  return <RouterProvider router={router} />
}

export default App;