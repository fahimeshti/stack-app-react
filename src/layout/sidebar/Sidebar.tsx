import sidebarLinks from "../../constants/sidebarLinks";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-full pt-[31px] px-[20px] border-r border-[#F3F3F3]">
      <div className="mb-[40px]">
        <img src={logo} alt="Logo" className="h-[44px] aspect-auto" />
      </div>
      <span className="text-[#B0B7C3] font-medium text-xs tracking-[0.84px]">
        PAGES
      </span>

      <ul className="mt-4 w-full space-y-1">
        {sidebarLinks?.map((links) => (
          <NavLink
            key={links.title}
            to={links.url}
            className={({ isActive }) =>
              isActive
                ? "text-[#A7AFBC] font-medium text-sm tracking-normal rounded-xl w-full h-[50px] flex items-center gap-[15px] bg-[#F0F5FA] pl-[17px] hover:bg-[#F0F5FA] transition-colors duration-100"
                : "text-[#A7AFBC] font-medium text-sm tracking-normal rounded-xl w-full h-[50px] flex items-center gap-[15px] pl-[17px] hover:bg-[#F0F5FA] transition-colors duration-100"
            }
          >
            <span>{links.icon}</span>
            <span>{links.title}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
