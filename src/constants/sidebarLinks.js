import DashboardIcon from "../assets/svgs/DashboardIcon";
import UsersIcon from "../assets/svgs/UsersIcon";
import SalesIcon from "../assets/svgs/SalesIcon";

const sidebarLinks = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Users",
    url: "/users",
    icon: <UsersIcon />,
  },
  {
    title: "Sales",
    url: "/sales",
    icon: <SalesIcon />,
  },
];

export default sidebarLinks;
