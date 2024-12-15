import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../components/pages/Spinner";

const PrivateRoutes = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    if(loading){
        return <Spinner></Spinner>
    }
    if(user?.email){
        return children
    }
    return <Navigate to={'/auth/login'}></Navigate>
};

export default PrivateRoutes;