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
      providesTags: (res, err, arg) => {
        const itemId = res.result[0].id;
        return res ? [{ type: "Product", itemId }, "Product"] : ["Product"];
      },
    }),
  }),
});

export const { useLoadProductByIdQuery } = productApi;
export const {
  endpoints: { loadProductById },
} = productApi;
