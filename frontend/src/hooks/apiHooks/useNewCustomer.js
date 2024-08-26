import { useQuery } from "@tanstack/react-query"
import {  getnewcustomer } from "../../apis/StatisticsApi"

export function useNewCustomer(timeline) {
    const{isLoading,data,isFetching,}=useQuery({
        queryKey: ['getnewcustomer', timeline],
        queryFn: ()=>getnewcustomer(timeline)
        
      });
      
      const res=data?.data?.result;
    console.log(res);
    return {isLoading,isFetching,res};
}


