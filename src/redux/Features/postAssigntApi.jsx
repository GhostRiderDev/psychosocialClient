import { baseApi } from "../api/baseApi";

const postAssigntApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postAssignt: builder.mutation({
      query: ({ patientId, therapistId }) => ({
        url: `/apointment/assign/${patientId}`,
        method: 'POST',
        body: { therapistId} , // Ensure body is passed as an object
      }),
    }),
  }),
});

export const { usePostAssigntMutation } = postAssigntApi;