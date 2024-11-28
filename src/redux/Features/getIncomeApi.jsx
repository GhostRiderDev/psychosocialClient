import { baseApi } from "../api/baseApi";


const getIncomeApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getIncome:builder.query({
            query:(year)=>`/package/income/ratio?search=${year}`,
        })
    })
})

export const {useGetIncomeQuery} = getIncomeApi;