import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Register from "../pages/authenticaions/Register";
import Login from "../pages/authenticaions/Login";
import PrivateRouter from "./PrivateRoutes";
import MainContent from "../pages/mainContent/MainContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: (
          <PrivateRouter>
            <Home></Home>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/main-content",
        element: (
          <PrivateRouter>
            <MainContent></MainContent>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
