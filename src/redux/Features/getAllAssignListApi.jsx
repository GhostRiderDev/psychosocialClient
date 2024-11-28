import { baseApi } from "../api/baseApi";


const getAllAssignListApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllAssignList:builder.query({
            query:({id})=>`/user/assigned/list/${id}`,
        })
    })
})

export const {useGetAllAssignListQuery} = getAllAssignListApi;