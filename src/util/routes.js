import { Navigate } from "react-router-dom";
import CardDetail from "../pages/CardDetail";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Write from "../pages/Write";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Intro from "../pages/Intro";
import FAQ from "../pages/FAQ";
import Land from "../pages/Land";
import Factory from "../pages/Factory";
import Etc from "../pages/Etc";
import Divide from "../pages/Divide";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "intro", element: <Intro /> },
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
      { path: "faq", element: <FAQ /> },
      { path: "land", element: <Land /> },
      {
        path: "factorage",
        element: <Factory />,
        children: [
          { path: "factorage-rent", element: <Factory /> },
          { path: "factorage-buy", element: <Factory /> },
        ],
      },
    ],
  },
  {
    path: "/property",
    element: <Layout />,
    children: [
      { path: "factorage", element: <Factory /> },
      { path: "factorage-rent", element: <Factory /> },
      { path: "factorage-buy", element: <Factory /> },
      { path: "land", element: <Land /> },
      { path: "divide", element: <Divide /> },
      { path: "divide-factory-land", element: <Divide /> },
      { path: "divide-factory-storage", element: <Divide /> },
      { path: "divide-home-land", element: <Divide /> },
      { path: "etc", element: <Etc /> },
      { path: "etc-house", element: <Etc /> },
      { path: "etc-commercial", element: <Etc /> },
      { path: "etc-room", element: <Etc /> },
    ],
  },
];

export default routes;
