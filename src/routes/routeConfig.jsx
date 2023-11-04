import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const AuthenticatedAndNotProtectedRoute = ({
  children = null,
  redirectTo = "/signin",
}) => {
  const isAuthenticated =
    useAppSelector((state) => state.auth)?.token?.length > 0;

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

const UnAuthenticated = ({ children = null, redirectTo = "/users" }) => {
  const isAuthenticated =
    useAppSelector((state) => state.auth)?.token?.length > 0;

  return !isAuthenticated ? children : <Navigate to={redirectTo} />;
};

const routeConfig = (routes) => {
  if (!routes) return <div />;

  window.scrollTo(0, 0);

  return (
    <Routes>
      {routes?.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={
            route.protected ? (
              <AuthenticatedAndNotProtectedRoute>
                <route.component />
              </AuthenticatedAndNotProtectedRoute>
            ) : (
              <UnAuthenticated>
                <route.component />
              </UnAuthenticated>
            )
          }
        />
      ))}
    </Routes>
  );
};

export default routeConfig;
