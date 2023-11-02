import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/root";
import Layout from "./components/Layaout";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
