import { baseApi } from "../api/baseApi";


const getAllAppointmentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllAppointment:builder.query({
            query:()=>`/sheidule/all/appointment`,
        })
    })
})

export const {useGetAllAppointmentQuery} = getAllAppointmentApi;