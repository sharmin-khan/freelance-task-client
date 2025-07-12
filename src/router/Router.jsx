import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../routes/PrivateRoute";
import AddTask from "../Pages/AddTask/AddTask";
import BrowseTasks from "../Pages/BrowseTasks/BrowseTasks";

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
      {
        path: "add-task",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "browse-tasks",
        Component: BrowseTasks,
      },
    ],
  },
]);

export default router;
