import { useQuery } from "@tanstack/react-query"
import {  getGeographicalDistribution } from "../../apis/StatisticsApi"

export function useGeographicalDistribution() {
    const{isLoading,data,isFetching,}=useQuery({
        queryKey: ['getGeographicalDistribution'],
        queryFn: ()=>getGeographicalDistribution()
        
      });
      
    const res=data?.data?.result;
    console.log(res);
    return {isLoading,isFetching,res};
}


