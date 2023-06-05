import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const USERS_API_KEY = "c102d200"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
         baseUrl: 'https://my.api.mockaroo.com/',
         prepareHeaders(headers){
             headers.set('x-api-key', USERS_API_KEY);
             return headers;
         }
    }),
    endpoints: (builder)=>{
        return {
            fetchUSers: builder.query({
                query: () => 'mock',
            })
        }
    }
})

export const {useFetchUSersQuery} = apiSlice;