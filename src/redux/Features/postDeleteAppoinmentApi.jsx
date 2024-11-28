import { baseApi } from "../api/baseApi";

const postDeleteSubscriptionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postDeleteSubscription: builder.mutation({
        query: (id) => {
            console.log("aimannnnnnnnnnnnnnnnnn",id);
            return {
              url: `/subscription/delete/${id}`,
              method: 'DELETE',
            //   body: values,
          } 
        },
        invalidatesTags: ["Subscriptions"],
      }),
    }),
   
  });
  
  export const { usePostDeleteSubscriptionMutation } = postDeleteSubscriptionApi;