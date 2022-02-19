import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: (token) => ({
        url: "/contacts",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: ({ contactId, token }) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Contact"],
    }),
    createContact: builder.mutation({
      query: ({ name, number, token }) => ({
        url: "/contacts",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { name, number },
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: builder.mutation({
      query: ({ contactId, name, number, token }) => ({
        url: `/contacts/${contactId}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { name, number },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
