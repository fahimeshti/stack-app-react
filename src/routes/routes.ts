import DashboardPage from "../pages/Dashboard/DashboardPage";
import SignInPage from "../pages/SignIn/SignInPage";
import SignupPage from "../pages/SignUp/SignupPage";
import UsersPage from "../pages/Users/UsersPage";

const publiclyAccessibleRoutes = [
  {
    id: "65sfs6f65s-49d5-86b1-ff6ef0a17e78",
    name: "HomePage",
    component: SignInPage,
    path: "/",
    exact: true,
    protected: false,
  },
  {
    id: "db4df7-49d5-86b1-ff6ef0a17e78",
    name: "SignInPage",
    component: SignInPage,
    path: "/signin",
    exact: true,
    protected: false,
  },
  {
    id: "53db4dfc-8e47-49d5-86b1-ff0a17e78",
    name: "SignupPage",
    component: SignupPage,
    path: "/signup",
    exact: true,
    protected: false,
  },
];

export const authenticatedRoutes = [
  {
    id: "a3dbdfc-8e9d5-86b1-ff6ef0a17e78",
    name: "Dashboard",
    component: DashboardPage,
    path: "/dashboard",
    exact: true,
    protected: true,
  },
  {
    id: "e3wbdfc-8e9d5-86b1-ff6ef0a17e78",
    name: "UsersPage",
    component: UsersPage,
    path: "/users",
    exact: true,
    protected: true,
  },
];

const routes = [...publiclyAccessibleRoutes, ...authenticatedRoutes];

export default routes;
