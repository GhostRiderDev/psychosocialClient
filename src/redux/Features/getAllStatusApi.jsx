import { baseApi } from "../api/baseApi";


const getAllStatusApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllStatus:builder.query({
            query:()=>`/user/total/users`,
        })
    })
})

export const {useGetAllStatusQuery} = getAllStatusApi;