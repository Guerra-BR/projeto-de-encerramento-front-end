import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteClass } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantesList: builder.query<RestauranteClass[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurante: builder.query<RestauranteClass, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesListQuery, useGetRestauranteQuery } = api
export default api
