import { api } from "./api";

export const catalogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loadProducts: builder.query({
      query: () => ({
        method: "POST",
        body: {
          action: "get_ids",
          params: { offset: 0, limit: 50 },
        },
      }),
    }),
    loadProductsByIds: builder.query({
      query: (ids) => ({
        method: "POST",
        body: {
          action: "get_items",
          params: { ids },
        },
      }),
    }),
  }),
});

export const { useLoadProductsQuery, useLoadProductsByIdsQuery } = catalogApi;
export const {
  endpoints: { loadProducts, loadProductsByIds },
} = catalogApi;
