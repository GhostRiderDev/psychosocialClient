import { baseApi } from "../api/baseApi";


const getAllSubscriptionsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllSubscriptions:builder.query({
            query:()=>`/subscription/get-plan`,
            providesTags:["Subscriptions"],
        })

    })
})

export const {useGetAllSubscriptionsQuery} = getAllSubscriptionsApi;