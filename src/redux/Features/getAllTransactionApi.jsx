import { baseApi } from "../api/baseApi";


const getAllTransactionApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllTransaction:builder.query({
            query:()=>`/sheidule/session-completed/pay`,
        })
    })
})

export const {useGetAllTransactionQuery} = getAllTransactionApi;