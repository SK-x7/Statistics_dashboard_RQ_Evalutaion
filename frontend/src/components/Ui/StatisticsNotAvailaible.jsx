function StatisticsNotAvailaible() {
  return (
    <div className="h-full w-full bg-blue-50 !flex flex-col justify-center items-center !flex-grow">
      <img
        src="https://vectorified.com/images/no-data-icon-10.png"
        alt="image"
        className="h-3/4"
      />
      <span className="text-red-800 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-wrap h-1/4 ">
        ⚠️ Data of this timeline is not availaible to visualise
      </span>
    </div>
  );
}

export default StatisticsNotAvailaible;
