import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page) => ({
        url: `/users?page=${page ? page : "1"}&per_page=10`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = authApiSlice;
