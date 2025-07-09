import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);

export default router;
