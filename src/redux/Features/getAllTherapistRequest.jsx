import { baseApi } from "../api/baseApi";

const getAllTherapistRequest = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTherapistRequest: builder.query({
      query: () => `/therapist/applied/therapist`,
    }),
  }),
});

export const { useGetAllTherapistRequestQuery } = getAllTherapistRequest;
