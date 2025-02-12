import { AxiosResponse } from "axios"
import { TCustomer } from "../types"
import axiosInstance from "../axiosInstance"
import { useSuspenseQuery, UseSuspenseQueryResult } from "@tanstack/react-query"

export type UseCustomersResponse = {
    updateCustomer:(customer:TCustomer)=>Promise<TCustomer>,
    addCustomer:(customer:TCustomer)=>Promise<TCustomer>,
    getAllCustomers:()=>Promise<TCustomer[]>,
    useSuspenseGetAll:()=>UseSuspenseQueryResult<TCustomer[], Error>
}

const useCustomers = ():UseCustomersResponse=>{
    const updateCustomer = async(customer:TCustomer)=>{
        const response: AxiosResponse<TCustomer> = await axiosInstance.put(`/customers/${customer.id}`, customer);
        return response.data;
    }
    const addCustomer = async(customer:TCustomer)=>{
        const response: AxiosResponse<TCustomer> = await axiosInstance.post("/customers", customer);
        return response.data;      
    }
    const getAllCustomers= async()=>{
        const response: AxiosResponse<TCustomer[]> = await axiosInstance.get("/customers");
        return response.data;
    }
    const useSuspenseGetAll=()=>{
        return useSuspenseQuery<TCustomer[], Error>({queryKey:["customers"],queryFn:getAllCustomers})
    }

    return {updateCustomer,addCustomer,getAllCustomers,useSuspenseGetAll}
}

export default useCustomers;