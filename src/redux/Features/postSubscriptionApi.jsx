import { baseApi } from "../api/baseApi";

const postSubscriptionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postSubscription: builder.mutation({
        query: (values) => {
            console.log("aimannnnnnnnnnnnnnnnnn",values);
            return {
              url: `/subscription/create-plan`,
              method: 'POST',
              body: values,
          } 
        },
        invalidatesTags: ["Subscriptions"],
      }),
    }),
   
  });
  
  export const { usePostSubscriptionMutation } = postSubscriptionApi;