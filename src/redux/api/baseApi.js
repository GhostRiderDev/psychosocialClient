import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      console.log("token----=-=-=-==-=-=", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("X-Custom-Header", "foobar");
      return headers;
    },
  }),
  tagTypes: ["Subscriptions"],
  endpoints: () => ({
    // getUser:builder.query({
    //     query:()=>'/users'
    // })
  }),
});
