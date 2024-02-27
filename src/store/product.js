import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    loadProductById: build.query({
      query: (id) => ({
        method: "POST",
        body: {
          action: "get_items",
          params: { ids: [id] },
        },
      }),
    }),
  }),
});

export const { useLoadProductByIdQuery } = productApi;
export const {
  endpoints: { loadProductById },
} = productApi;
