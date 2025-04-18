import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import VerifyEmail from "./pages/VerifyEmail";
import AuthContextProvider from "./store/AuthContextProvider";
import ProtectedRoute from "./components/Layout/ProtectedRoute";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout /> ,
      children: [
        {
          path: "/",
          element: <ProtectedRoute><Home /></ProtectedRoute>
        },
        {
          path: "/edit",
          element: <ProtectedRoute><EditProfile /></ProtectedRoute>
        },
        {
          path: "/verify",
          element: <ProtectedRoute><VerifyEmail /></ProtectedRoute>
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
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App;