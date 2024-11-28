import { baseApi } from "../api/baseApi";


const getAllTherapistApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllTherapist:builder.query({
            query:()=>`/therapist/all`,
        })
    })
})

export const {useGetAllTherapistQuery} = getAllTherapistApi;