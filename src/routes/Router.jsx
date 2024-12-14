import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../components/pages/CategoryNews";

const Router = createBrowserRouter([
    {
        path: '/' ,
        element: <HomeLayout></HomeLayout> ,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}/>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
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