import { Navigate } from "react-router-dom";
import CardDetail from "../pages/CardDetail";
import BoardDetail from "../components/Board/BoardDetail";
import Layout from "../layout/Layout";
import Home from "../pages/00_Home";
import Write from "../pages/09_Write";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Intro from "../pages/01_Intro";
import FAQ from "../pages/08_FAQ";
import Land from "../pages/03_Land";
import Factory from "../pages/02_Factory";
import Etc from "../pages/05_Etc";
import Divide from "../pages/04_Divide";
import Board from "../pages/07_Board";
import BoardWrite from "../components/Board/BoardWrite";
import Login from "../pages/Login";

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
      { path: "land", element: <Land /> },
      {
        path: "board",
        children: [
          { path: "", element: <Board /> },
          { path: ":id", element: <BoardDetail /> },
          { path: "write", element: <BoardWrite /> },
        ],
      },
      { path: "faq", element: <FAQ /> },
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
  {
    path: 'login',
    element: <Login />
  }
];

export default routes;
