import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";

// const container = document.getElementById("root") as HTMLElement;
// const root = createRoot(container);
// root.render(
//   <CookiesProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </CookiesProvider>
// );
ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CookiesProvider>,
  document.getElementById("root")
);
