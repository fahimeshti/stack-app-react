const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://reqres.in/api"
    : "https://reqres.in/api";

export default baseURL;
