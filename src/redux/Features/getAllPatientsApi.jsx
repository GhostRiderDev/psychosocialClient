import { baseApi } from "../api/baseApi";


const getAllPatientsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllPatients:builder.query({
            query:()=>`/user/patients-all`,
        })
    })
})

export const {useGetAllPatientsQuery} = getAllPatientsApi;