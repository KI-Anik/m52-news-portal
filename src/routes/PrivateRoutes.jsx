/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/pages/Spinner";

const PrivateRoutes = ({children}) => {
    
    const location = useLocation()
    const {user, loading} =useContext(AuthContext)
    if(loading){
        return <Spinner></Spinner>
    }
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoutes;