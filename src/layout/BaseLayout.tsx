import Header from "./header/Header";
import routeConfig from "../routes/routeConfig";
import routes from "../routes/routes";
import { Toaster } from "react-hot-toast";
import { useAppSelector } from "../app/hooks";
import AuthLayout from "./AuthLayout";

type AuthT = {
  user: object;
  token: string;
};

const BaseLayout = () => {
  const auth = useAppSelector((state) => state.auth) as AuthT;
  const isAuthenticated = auth && auth?.token?.length > 0;

  return (
    <div>
      {isAuthenticated ? (
        <AuthLayout>{routeConfig(routes)}</AuthLayout>
      ) : (
        <>
          <Header />
          {routeConfig(routes)}
        </>
      )}

      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default BaseLayout;
