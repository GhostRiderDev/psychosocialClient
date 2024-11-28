import { baseApi } from "../api/baseApi";


const getSingleSubscriptionApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSingleSubscription:builder.query({
            query:(id)=>`subscription/single-subscription/${id}`,
        })
    })
})

export const {useGetSingleSubscriptionQuery} = getSingleSubscriptionApi;