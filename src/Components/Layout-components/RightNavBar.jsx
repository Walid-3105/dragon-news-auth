import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavBar = () => {
  return (
    <div className="space-y-3">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightNavBar;
