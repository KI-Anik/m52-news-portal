import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
        <div className="space-y-5">
           <SocialLogin/>
           <FindUs/>
        </div>
    );
};

export default RightNavbar;