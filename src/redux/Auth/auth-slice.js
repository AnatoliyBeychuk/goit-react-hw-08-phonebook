import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: (token) => ({
        url: "/users/current",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Auth"],
    }),
    registerUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: "/users/signup",
        method: "POST",
        body: { name, email, password },
      }),
      invalidatesTags: ["Auth"],
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: "/users/logout",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/users/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLogoutMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
} = authApi;
