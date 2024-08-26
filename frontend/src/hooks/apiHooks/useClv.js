import { useQuery } from "@tanstack/react-query"
import {  getclv } from "../../apis/StatisticsApi"

export function useClv() {
    const{isLoading,data,isFetching,}=useQuery({
        queryKey: ['getclv'],
        queryFn: ()=>getclv()
        
      });
      
    const res=data?.data?.result;
    console.log(res);
    return {isLoading,isFetching,res};
}


