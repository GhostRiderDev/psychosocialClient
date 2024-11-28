import { baseApi } from "../api/baseApi";


const getAllQuestionApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllQuestion:builder.query({
            query:()=>`/servey/all`,
        })
    })
})

export const {useGetAllQuestionQuery} = getAllQuestionApi;