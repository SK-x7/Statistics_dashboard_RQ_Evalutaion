import { useQuery } from "@tanstack/react-query"
import {  getTotalSalesOverTime } from "../../apis/StatisticsApi"

export function useTotalSalesOverTime(timeline) {
    const{isLoading,data,isFetching,}=useQuery({
        queryKey: ['totalSales', timeline],
        queryFn: ()=>getTotalSalesOverTime(timeline)
        
      });
      
      const res=data?.data?.result;
    console.log(res);
    return {isLoading,isFetching,res};
}


