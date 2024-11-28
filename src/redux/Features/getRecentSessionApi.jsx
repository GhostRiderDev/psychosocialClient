import { baseApi } from "../api/baseApi";


const getSinglePatientsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSinglePatients:builder.query({
            query:()=>`/sheidule/recent/session`,
        })
    })
})

export const {useGetSinglePatientsQuery} = getSinglePatientsApi;