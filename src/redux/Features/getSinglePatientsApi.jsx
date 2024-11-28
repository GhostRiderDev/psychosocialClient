import { baseApi } from "../api/baseApi";


const getSinglePatientsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSinglePatients:builder.query({
            query:({id})=>`user/patient/${id}`,
        })
    })
})

export const {useGetSinglePatientsQuery} = getSinglePatientsApi;