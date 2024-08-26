/* eslint react/prop-types: 0 */
function Select({ options, value, onChange, ...props }) {
    return (
      <select value={value}  onChange={onChange} {...props} className="text-[10px] sm:text-xs lg:text-sm lg:py-[0.8rem] px-2 lg:px-[1.2rem] border rounded-lg bg-white font-medium shadow-lg border-indigo-100 text">
        {options?.map((option) => (
          <option value={option.value} key={option.value} className="bg-white">
            {option?.label}
          </option>
        ))}
      </select>
    );
  }
  
  export default Select;
  