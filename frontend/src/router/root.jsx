import { createBrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
import PublicRoute from "./public_route";
import PrivateRoute from "./private_route";
import { checkAuth } from "../utils/checkAuth";

export const router = createBrowserRouter([
    checkAuth() ? PrivateRoute() : {},
    ...PublicRoute(),
]);