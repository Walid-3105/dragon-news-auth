import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h3>AutLayout</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
