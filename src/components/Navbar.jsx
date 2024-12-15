import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const {user} = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center">
           <div className="">{user.name}</div>
           <div className="nav space-x-4">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/career'}>Career</Link>
           </div>
           <div className="login flex gap-2 items-center">
            <div className="">
                <img src={userIcon} alt="" />
            </div>
            <Link to={'/auth/login'} className="btn btn-neutral">Login</Link>
           </div>
        </div>
    );
};

export default Navbar;