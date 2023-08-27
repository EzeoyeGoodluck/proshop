import { PRODUCTS_URL } from "../constants";
import {apiSlice} from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: ( builder) => ({
        getProducts: builder.query({
            query: ()=> ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5
        }),
        getProductsDetails: builder.query({
            query: (productId)=> ({
                url: `${PRODUCTS_URL}/${productId}`,

            }),
            keepUnusedDataFor: 5
        }),
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: PRODUCTS_URL,
                methodd: 'POST',
            }),
            invalidatesTags: ['product'],
        })
    }),
});

export const { useGetProductsQuery, useGetProductsDetailsQuery, useCreateProductMutation } = productsApiSlice;