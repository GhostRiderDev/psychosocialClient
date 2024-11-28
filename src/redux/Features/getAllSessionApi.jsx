import { baseApi } from "../api/baseApi";


const getAllSessionApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllSession:builder.query({
            query:()=>`/sheidule/recent/session`,
        })
    })
})

export const {useGetAllSessionQuery} = getAllSessionApi;