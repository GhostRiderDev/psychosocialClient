import { baseApi } from "../api/baseApi";


const getAnswereUserApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAnswereUser:builder.query({
            query:({id})=>`/answer/answered-by-user/${id}`,
        })
    })
})

export const {useGetAnswereUserQuery} = getAnswereUserApi;