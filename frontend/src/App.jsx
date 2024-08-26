import BarChart2 from "./components/charts/BarChart";
import LineChart from "./components/charts/LineChart";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTotalSalesOverTime } from "./hooks/apiHooks/useTotalSalesOverTime";
import { useGrowth } from "./hooks/apiHooks/useGrowth";
import { useNewCustomer } from "./hooks/apiHooks/useNewCustomer";
import { useRepeatCustomer } from "./hooks/apiHooks/useRepeatCustomer";
import { useClv } from "./hooks/apiHooks/useClv";
import Spinner from "./components/Ui/Spinner";
import { useGeographicalDistribution } from "./hooks/apiHooks/useGeographicalDistribution";
import Aside from "./components/pages/dashboardComponents/Aside";
import Header from "./components/pages/dashboardComponents/Header";
import SortAndFilter from "./components/pages/dashboardComponents/SortAndFilter";

function App() {
  const [searchParams] = useSearchParams();
  const [showSortBy, setShowSortBy] = useState(false);
  const [timeline, setTimeline] = useState(
    searchParams.get("Timeline") || "lifetime"
  );

  useEffect(() => {
    const currentTimeline = searchParams.get("Timeline") || "lifetime";
    const month = searchParams.get("month");
    if ((month === "All") & (currentTimeline === "yearly"))
      setTimeline("yearly");
    if ((month !== "All") & (currentTimeline === "yearly"))
      setTimeline("monthly");
    else setTimeline(currentTimeline);

    if (!timeline || timeline === "lifetime" || timeline === "quarterly") {
      setShowSortBy(false);
    } else if (timeline === "yearly") {
      setShowSortBy(true);
    }
  }, [searchParams, timeline]);

  const {
    res: totalSalesData,
    isLoading: loadingTotalSalesData,
    isFetching: fetchingTotalSalesData,
  } = useTotalSalesOverTime(timeline);
  const {
    res: totalGrowth,
    isLoading: loadingTotalGrowth,
    isFetching: fetchingTotalGrowth,
  } = useGrowth(timeline);
  const {
    res: totalNewCustomers,
    isLoading: loadingTotalNewCustomers,
    isFetching: fetchingTotalNewCustomers,
  } = useNewCustomer(timeline);
  const {
    res: totalRepeatingCustomers,
    isLoading: loadingTotalRepeatingCustomers,
    isFetching: fetchingTotalRepeatingCustomers,
  } = useRepeatCustomer(timeline);
  const {
    res: clvData,
    isLoading: loadingClvData,
    isFetching: fetchingClvData,
  } = useClv();
  const {
    res: geographicalDistributionData,
    isLoading: loadingGeographicalDistributionData,
    isFetching: fetchingGeographicalDistributionData,
  } = useGeographicalDistribution();

  return (
    <div className=" flex">
      <Aside />
      {/* right  */}
      <div className="w-3/4 sm:w-4/5 flex flex-col justify-start items-center gap-6 bg-[#F4F4F4] ">
        <Header />
        <SortAndFilter showSortBy={showSortBy} />

        {!loadingTotalGrowth &&
        !fetchingTotalGrowth &&
        totalGrowth?.length &&
        !loadingTotalSalesData &&
        !fetchingTotalSalesData &&
        totalSalesData?.length &&
        !loadingTotalNewCustomers &&
        !fetchingTotalNewCustomers &&
        totalNewCustomers?.length &&
        !loadingTotalRepeatingCustomers &&
        !fetchingTotalRepeatingCustomers &&
        totalRepeatingCustomers?.length &&
        !loadingClvData &&
        !fetchingClvData &&
        clvData?.length &&
        !loadingGeographicalDistributionData &&
        !fetchingGeographicalDistributionData &&
        geographicalDistributionData?.length ? (
          <main className="bg-[#F4F4F4] grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 w-full gap-x-3 gap-y-6 px-9  min-h-screen h-[130vh] lg:h-screen">
            <BarChart2 data={totalSalesData} keyValue="totalSales" />
            <LineChart data={totalGrowth} keyValue="salesGrowthRate" />
            <BarChart2 data={totalNewCustomers} keyValue="newCustomersCount" />
            <LineChart
              data={totalRepeatingCustomers}
              keyValue="repeatCustomersCount"
            />
          </main>
        ) : (
          <Spinner />
        )}

        {clvData && (
          <section className="w-full flex flex-col justify-start items-center px-8 gap-7 ">
            <h1 className="w-full text-center capitalize text-sm sm:text-lg md:text-xl font-semibold">
              Customer Lifetime Value (based on month of their first purchase)
            </h1>
            <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-full h-[50vh] gap-6">
              <BarChart2 data={clvData} keyValue="clvData" />
              <LineChart data={clvData} keyValue="clvData" />
            </div>
          </section>
        )}

        {geographicalDistributionData && (
          <section className="w-full flex flex-col justify-start items-center px-8 gap-7 ">
            <h1 className="w-full text-center capitalize text-sm sm:text-lg md:text-xl   font-semibold">
              Geographical Distribution of Customers
            </h1>
            <div className="flex justify-center items-center w-full h-[50vh] md:h-screen">
              <LineChart
                data={geographicalDistributionData}
                keyValue="geographicalDistributionData"
              />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
