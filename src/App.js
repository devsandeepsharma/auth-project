import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";

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
          element: <h1>Login Page</h1> 
        },
        {
          path: "/signup",
          element: <h1>Signup Page</h1> 
        },
      ]
    },
])

  return <RouterProvider router={router} />
}

export default App;