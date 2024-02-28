import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import md5 from "md5";
import formatDate from "../utils/formatDate/formatDate";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://api.valantis.store:40000/",
  prepareHeaders: (headers) => {
    headers.set("X-Auth", md5(`Valantis_${formatDate()}`));
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Catalog", "Product"],
  endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({}),
});
