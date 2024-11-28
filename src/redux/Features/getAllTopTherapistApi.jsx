import { baseApi } from "../api/baseApi";


const getAllTopTherapistApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllTopTherapist:builder.query({
            query:()=>`/user/top/therapist`,
        })
    })
})

export const {useGetAllTopTherapistQuery} = getAllTopTherapistApi;