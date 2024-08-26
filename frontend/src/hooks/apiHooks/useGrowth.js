import { useQuery } from "@tanstack/react-query"
import {  getgrowth } from "../../apis/StatisticsApi"

export function useGrowth(timeline) {
    const{isLoading,data,isFetching,}=useQuery({
        queryKey: ['getGrowth', timeline],
        queryFn: ()=>getgrowth(timeline)
        
      });
      
      const res=data?.data?.result;
    console.log(res);
    return {isLoading,isFetching,res};
}


