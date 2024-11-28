import { baseApi } from "../api/baseApi";

const postUpdateSubscriptionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postUpdateSubscription: builder.mutation({
        query: ({values,id}) => {
            console.log("aimannnnnnnnnnnnnnnnnn",values);
            return {
              url: `/subscription/update/${id}`,
              method: 'POST',
              body: values,
          } 
        },
        invalidatesTags: ["Subscriptions"],
      }),
    }),
   
  });
  
  export const { usePostUpdateSubscriptionMutation } = postUpdateSubscriptionApi;