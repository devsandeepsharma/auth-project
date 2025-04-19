import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import VerifyEmail from "./pages/VerifyEmail";
import authContextProvider from "./store/authContextProvider";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout /> ,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/edit",
          element: <EditProfile />
        },
        {
          path: "/verify",
          element: <VerifyEmail />
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

  return (
    <authContextProvider>
      <RouterProvider router={router} />
    </authContextProvider>
  )
}

export default App;