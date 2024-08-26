import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis,Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatisticsNotAvailaible from '../Ui/StatisticsNotAvailaible';

function Line_Chart({data,keyValue}) {
  
  
  let dataValue;
    
  if(keyValue==="salesGrowthRate"){
      dataValue="Sales_growth_rate"
  }else if(keyValue==="repeatCustomersCount"){
      dataValue="Recurring_customers_count"
  }else if(keyValue==="clvData"){
      dataValue="Customers_LifetimeValue"
  }else if(keyValue==="geographicalDistributionData"){
    dataValue="Customer_count"
  }
  
  

    const [searchParams]=useSearchParams();
    const timeline = searchParams.get('Timeline');
    const year = parseInt(searchParams.get('year'), 10);
    const month = searchParams.get('month');
    let  dataToShow;
    if(keyValue==="salesGrowthRate"){
        
        dataToShow = useMemo(() => {
            let filteredData = data;
            
          if (timeline === 'yearly'&&month==="All") {
              filteredData = data.filter((obj) => obj._id.year === year);
              
              return filteredData?.map((obj,i) => ({
                name: `${obj?._id?.month}`,
                Sales_growth_rate: obj?.salesGrowthRate||0,
            }));
            }else if (timeline === 'yearly'&&month!=="All") {
              let monthToFind=parseInt(month, 10);
              filteredData = data.filter((obj) => {
              
              return obj._id.month == monthToFind&&obj._id.year==year});
              return filteredData?.map((obj,i) => ({
                  name: `${obj?._id?.day}`,
                  Sales_growth_rate: obj?.salesGrowthRate||0,
              }));
          }else{
            return filteredData?.map((obj,i) => ({
                name: `${obj?._id?.year}`,
                Sales_growth_rate: obj?.salesGrowthRate||0,
            }));
            
        }
            
            
        }, [data,keyValue,timeline,year,month]);
    }else if(keyValue==="repeatCustomersCount"){
        dataToShow = useMemo(() => {
          let filteredData=data;
          if (timeline === 'yearly'&&month==="All") {
            filteredData = data.filter((obj) => obj._id.year === year);
            
            return filteredData?.map((obj,i) => ({
              name: `${obj?._id?.month}`,
              Recurring_customers_count: obj?.repeatCustomersCount||0,
          }));
          }else if (timeline === 'yearly'&&month!=="All") {
            let monthToFind=parseInt(month, 10);
            filteredData = data.filter((obj) => {

            
            return obj._id.month == monthToFind&&obj._id.year==year});
            return filteredData?.map((obj,i) => ({
                name: `${obj?._id?.day}`,
                Recurring_customers_count: obj?.repeatCustomersCount||0,
            }));
        }else{
            return filteredData?.map((obj,i) => ({
                name: `${obj?._id?.year}`,
                Recurring_customers_count: obj?.repeatCustomersCount||0,
            }));
            
        }
        }, [data,keyValue,year,month,timeline]);
        
    }else if(keyValue==="clvData"){
      dataToShow=useMemo(()=>{
          return data?.map((obj,i) => ({
              name: `${obj?._id}`,
              Customers_LifetimeValue: obj?.totalCLV,
          }));       
      })
  }else if(keyValue==="geographicalDistributionData"){
    dataToShow=useMemo(()=>{
        return data?.map((obj,i) => ({
            name: `${obj?._id}`,
            Customer_count: obj?.customerCount,
        }));       
    })
}
    
    if(!dataToShow?.length&&keyValue=="salesGrowthRate")  return <StatisticsNotAvailaible/>
    if(!dataToShow?.length&&keyValue=="repeatCustomersCount")  return <StatisticsNotAvailaible/>
    
    return (
        <div className='w-full h-full bg-[#FCFCFC] rounded-xl'>
        
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={dataToShow}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 10  ,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataValue} stroke="#475BE8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

        </div>
    )
}

export default Line_Chart
