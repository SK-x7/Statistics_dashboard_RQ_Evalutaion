
import { useSearchParams } from "react-router-dom";
import Select from "./Select"




const yearVise=[
    {
        value:"2023",
        label:"2023"
    },
    {
        value:"2022",
        label:"2022"
    },
    {
        value:"2021",
        label:"2021"
    },
    {
        value:"2020",
        label:"2020"
    },
]
const monthWise = [
    { value: "0", label: "Whole year" },
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" }
  ];

function SortBy2() {
    let options=[];
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("year") || "";
  
    function handleChange(e) {
      searchParams.set("year", e.target.value);
      setSearchParams(searchParams);
    }
    
    
    let currentFilter = searchParams.get('Timeline') || options?.at(0)?.value||"all";
    if(currentFilter==="yearly")    options=yearVise
    else if(currentFilter==="monthly")    options=monthWise
    
    return (
        <Select options={options} value={sortBy} onChange={handleChange
        }/>
    )
}

export default SortBy2
