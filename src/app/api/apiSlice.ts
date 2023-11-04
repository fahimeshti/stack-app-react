import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import baseURL from "./config/baseURL";

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
