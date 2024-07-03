import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { transformData, TData, TServerData } from "../utils/transformData";

export const dogAPI = createApi({
  reducerPath: "dogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getPosts: builder.query<TData[], void>({
      query: () => "/doggos",
      transformResponse: (response: TServerData[]): TData[] =>
        transformData(response),
    }),
  }),
});

export const { useGetPostsQuery } = dogAPI;
