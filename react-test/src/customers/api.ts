import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance"
import { TCustomer } from "./types";

const getAllCustomers = async()=>{
    const response: AxiosResponse<TCustomer[]> = await axiosInstance.get("/customers");
    return response.data;
}

const getCustomerById = async(id:string)=>{
    const response: AxiosResponse<TCustomer> = await axiosInstance.get(`/customers/${id}`);
    return response.data;  
}

const updateCustomer = async(customer:TCustomer)=>{
    const response: AxiosResponse<TCustomer> = await axiosInstance.put(`/customers/${customer.id}`, customer);
    return response.data;  
}

const addCustomer = async(customer:TCustomer)=>{
    const response: AxiosResponse<TCustomer> = await axiosInstance.post(`/customers/${customer.id}`, customer);
    return response.data;
}

export {getCustomerById,getAllCustomers,updateCustomer,addCustomer}
