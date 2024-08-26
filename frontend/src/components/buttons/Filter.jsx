import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  let currentFilter =
    searchParams.get(filterField) || options?.at(0)?.value || "all";

  function handleClick(value) {
    currentFilter = value;
    searchParams.set(filterField, value);
    if (value === "yearly") {
      searchParams.set("year", "2023");
      searchParams.set("month", "All");
    }

    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <div className="border  bg-white shadow-lg rounded-lg border-indigo-100 p-[0.4rem] flex gap-[0.4rem]">
      {options?.map((option) => (
        <button
          className={` text-black text-[10px] sm:text-xs lg:text-sm border-none rounded-lg font-medium py-[0.44rem] px-2 md:px-[0.8rem] transition-all duration-[0.3s] hover:bg-indigo-600 hover:text-indigo-50 active:!bg-indigo-600 active:!text-indigo-50 ${
            currentFilter === option?.value
              ? "bg-indigo-600 text-indigo-50"
              : ""
          } `}
          key={option.value}
          onClick={(e) => {
            e.preventDefault();
            handleClick(option.value);
          }}
          //   active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option?.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
