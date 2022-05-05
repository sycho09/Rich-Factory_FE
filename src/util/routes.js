import { Navigate } from "react-router-dom";
import CardDetail from "../pages/CardDetail";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Write from "../pages/Write";
import HomeLayout from "../layout/HomeLayout/HomeLayout";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "home", element: <Home /> },
    ],
  },
  {
    path: "/main",
    element: <Layout />,
    children: [
      { path: "page/:id", element: <CardDetail /> },
      { path: "write", element: <Write /> },
    ],
  },
];

export default routes;
