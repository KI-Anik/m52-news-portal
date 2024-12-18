import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../components/pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import NewsDetails from "../components/pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";

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
        path: 'news/:id' ,
        element: <PrivateRoutes>
            <NewsDetails></NewsDetails>
        </PrivateRoutes> ,
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login' ,
                element: <Login></Login>,
            },
            {
                path: '/auth/register' ,
                element: <Register></Register>,
            },
        ]
    },
   
    {
        path: '*' ,
        element: <h1>Error</h1> ,
    },
])

export default Router;