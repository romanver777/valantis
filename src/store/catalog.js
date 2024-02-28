import { api } from "./api";

export const catalogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loadAll: builder.query({
      query: () => ({
        method: "POST",
        body: {
          action: "get_ids",
          params: { offset: 0 },
        },
      }),
    }),
    loadProducts: builder.query({
      query: (page) => ({
        url: `?page=${page}`,
        method: "POST",
        body: {
          action: "get_ids",
          params: { offset: (page - 1) * 50, limit: 50 },
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
      providesTags: (res, err, arg) => {
        return res
          ? [
              ...res.result.map(({ id }) => ({ type: "Catalog", id })),
              "Catalog",
            ]
          : ["Catalog"];
      },
    }),
  }),
});

export const { useLoadProductsQuery, useLoadProductsByIdsQuery, useLoadAllQuery } = catalogApi;
export const {
  endpoints: { loadProducts, loadProductsByIds, loadAll },
} = catalogApi;
