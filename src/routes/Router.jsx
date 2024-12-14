import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const Router = createBrowserRouter([
    {
        path: '/' ,
        element: <HomeLayout></HomeLayout> ,
    },
    {
        path: 'news' ,
        element: <h1>news layout</h1> ,
    },
    {
        path: 'auth' ,
        element: <h1>news login</h1>,
    },
    {
        path: '*' ,
        element: <h1>Error</h1> ,
    },
])

export default Router;