import { baseApi } from "../api/baseApi";


const getNotificationApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getNotification:builder.query({
            query:()=>`/notification/all`,
        })
    })
})

export const {useGetNotificationQuery} = getNotificationApi;