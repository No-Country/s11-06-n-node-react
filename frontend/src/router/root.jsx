import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layaout";
import HomePage from "../features/Home/pages";
import { EVENT_PATH, INDEX_PATH, USER_PATH } from "./routes";


export const router = createBrowserRouter([
    {
      path: INDEX_PATH,
      element: <Layout />,
      errorElement: <p>Error</p>,
      children:[
        {
            index: true,
            element: <HomePage/>,
        },
        {
            path: EVENT_PATH,
            // element: <EventPage/>,
        },
        {
            path: USER_PATH,
            // element: <UserPage />,
        },
      ]
    },
    {
        path:"*",
        element: <p>vuelve</p>
    },
]);