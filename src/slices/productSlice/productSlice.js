import { PRODUCT_URL } from "../../constants";
import { apiSlice } from "../apiSlice";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ feature = [], page = 1 }) => ({
        url: `${PRODUCT_URL}${feature.length > 0 ? `?features=${feature}&page=${page || 1}` : `?page=${page || 1}`}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productSlice;
