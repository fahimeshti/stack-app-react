import React from "react";
import Sidebar from "./sidebar/Sidebar";
import AuthHeader from "./AuthHeader";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 w-full overflow-hidden">
        <Sidebar />
      </div>

      <div className="col-span-10 pt-[23px] pl-[45px]">
        <AuthHeader />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
