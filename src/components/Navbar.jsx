import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
           <div className=""></div>
           <div className="nav space-x-4">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/career'}>Career</Link>
           </div>
           <div className="login flex gap-2 items-center">
            <div className="">
                <img src={userIcon} alt="" />
            </div>
            <button className="btn btn-neutral">Login</button>
           </div>
        </div>
    );
};

export default Navbar;