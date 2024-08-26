import axios from "axios";
import { API_URL } from "../utils/Constant";

export const getTotalSalesOverTime= async (timeline)=>{
    
    const res=await axios.get(`${API_URL}/getTotalSalesOverTime/${timeline}`,{
        withCredentials:true
    })
    return res;
}

export const getgrowth= async (timeline)=>{
    
    const res=await axios.get(`${API_URL}/getgrowth/${timeline}`,{
        withCredentials:true
    })
    return res;
}

export const getnewcustomer= async (timeline)=>{
    
    const res=await axios.get(`${API_URL}/getnewcustomer/${timeline}`,{
        withCredentials:true
    })
    return res;
}

export const noofrepeatcustomer= async (timeline)=>{
    
    const res=await axios.get(`${API_URL}/noofrepeatcustomer/${timeline}`,{
        withCredentials:true
    })
    return res;
}

export const getGeographicalDistribution= async ()=>{
    
    const res=await axios.get(`${API_URL}/getGeographicalDistribution`,{
        withCredentials:true
    })
    return res;
}

export const getclv= async ()=>{
    
    const res=await axios.get(`${API_URL}/getclv`,{
        withCredentials:true
    })
    return res;
}