import { useQuery } from "@tanstack/react-query"
import {  noofrepeatcustomer } from "../../apis/StatisticsApi"

export function useRepeatCustomer(timeline) {
    const{isLoading,data,isFetching,}=useQuery({
        queryKey: ['noofrepeatcustomer', timeline],
        queryFn: ()=>noofrepeatcustomer(timeline)
        
      });
      
      const res=data?.data?.result;
    console.log(res);
    return {isLoading,isFetching,res};
}


