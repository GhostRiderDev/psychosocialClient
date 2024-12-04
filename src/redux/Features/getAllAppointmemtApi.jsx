import axios from "axios";
import { baseApi } from "../api/baseApi";
import baseURL from "../../config";

const getAllAppointmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAppointment: builder.query({
      query: () => `/sheidule/all/appointment`,
    }),
  }),
});

const getMyAppointments = async (userId, token) => {
  return baseURL
    .get(`/apointment/${userId}/my-apointment`, {
      headers: {
        "Content-Type": "application/json",
        authentication: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

const { useGetAllAppointmentQuery } = getAllAppointmentApi;
export { useGetAllAppointmentQuery, getMyAppointments };
