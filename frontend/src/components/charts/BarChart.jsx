import { useMemo,} from "react";
import { useSearchParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import StatisticsNotAvailaible from "../Ui/StatisticsNotAvailaible";


function Bar_Chart({ data, keyValue }) {

  const [searchParams] = useSearchParams();
  let dataValue;

  if (keyValue === "totalSales") {
    dataValue = "Total_Sales";
  } else if (keyValue === "newCustomersCount") {
    dataValue = "New_customers_count";
  } else if (keyValue === "clvData") {
    dataValue = "Customers_count";
  } else if (keyValue === "geographicalDistributionData") {
    dataValue = "Customer_count";
  }

  const timeline = searchParams.get("Timeline");
  const year = parseInt(searchParams.get("year"), 10);
  const month = searchParams.get("month");
  let dataToShow;
  if (keyValue === "totalSales") {
    dataToShow = useMemo(() => {
      let filteredData = data;

      if (timeline === "yearly" && month === "All") {
        filteredData = data.filter((obj) => obj._id.year === year);

        // labelValue=`Months`
        return filteredData?.map((obj, i) => ({
          name: `${obj?._id?.month}`,
          Total_Sales: obj?.totalSales,
        }));
      } else if (timeline === "yearly" && month !== "All") {
        let monthToFind = parseInt(month, 10);
        filteredData = data.filter((obj) => {
            return obj._id.month == monthToFind && obj._id.year == year;
        });

        return filteredData?.map((obj, i) => ({
          name: `${obj?._id?.day}`,
          Total_Sales: obj?.totalSales,
        }));
      } else {
        return filteredData?.map((obj, i) => ({
          name: `${obj?._id?.year}`,
          Total_Sales: obj?.totalSales,
        }));
      }
    }, [data, timeline, year, keyValue, month]);
  } else if (keyValue === "newCustomersCount") {
    dataToShow = useMemo(() => {
      let filteredData = data;
      if (timeline === "yearly" && month === "All") {
        filteredData = data.filter((obj) => obj._id.year === year);

        return filteredData?.map((obj, i) => ({
          name: `${obj?._id?.month}`,
          New_customers_count: obj?.newCustomersCount,
        }));
      } else if (timeline === "yearly" && month !== "All") {
        let monthToFind = parseInt(month, 10);
        filteredData = data.filter((obj) => {


          return obj._id.month == monthToFind && obj._id.year == year;
        });
        return filteredData?.map((obj, i) => ({
          name: `${obj?._id?.day}`,
          New_customers_count: obj?.newCustomersCount,
        }));
      } else {
        return filteredData?.map((obj, i) => ({
          name: `${obj?._id?.year}`,
          New_customers_count: obj?.newCustomersCount,
        }));
      }
    }, [data, timeline, year, keyValue, month]);
  } else if (keyValue === "clvData") {
    dataToShow = useMemo(() => {
      return data?.map((obj, i) => ({
        name: `${obj?._id}`,
        Customers_count: obj?.customerCount,
      }));
    });
  } else if (keyValue === "geographicalDistributionData") {
    dataToShow = useMemo(() => {
      return data?.map((obj, i) => ({
        name: `${obj?._id}`,
        Customer_count: obj?.customerCount,
      }));
    });
  }




  if (!dataToShow?.length && keyValue === "totalSales")
    return <StatisticsNotAvailaible />;
  if (!dataToShow?.length && keyValue === "newCustomersCount")
    return <StatisticsNotAvailaible />;
  return (
    // <div className='!h-1/2 !w-1/2 bg-[#1A1D1F]'>

    <div className="!h-full !w-full bg-[#FCFCFC] flex flex-col justify-center items-center rounded-xl">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataToShow}
          margin={{
            top: 30,
            right: 20,
            left: 20,
            bottom: 10,
          }}
          barSize={1}
          barGap={0.5}
          barCategoryGap={1}
        >
          <XAxis dataKey="name">
          </XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey={dataValue}
            fill="#475BE8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Bar_Chart;
