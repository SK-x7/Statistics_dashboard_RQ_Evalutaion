import Filter from "../../buttons/Filter"
import SortBy from "../../buttons/SortBy"

function SortAndFilter({showSortBy}) {
    const filterOptions=[
        {
          value: "lifetime",
          label: "Lifetime",
        },
        {
          value: "quarterly",
          label: "Quarterly",
        },
        {
          value: "yearly",
          label: "Yearly",
        },
      ]
    return (
        <div className="w-full flex justify-between md:justify-between items-center px-4 md:px-8 pt-3">
          <span className="text-black text-xs sm:text-base w-0 hidden sm:block sm:w-1/2 ">
            Dashboard
          </span>
          <div className="flex  items-center gap-[0.4rem] lg:gap-[1.6rem] w-full  sm:w-1/2 md:!w-1/2 justify-end">
            <Filter
              filterField="Timeline"
              options={filterOptions}
            />

            {showSortBy && (
              <>
                <SortBy forUse="year" />
                <SortBy forUse="month" />
              </>
            )}
          </div>
        </div>
    )
}

export default SortAndFilter
