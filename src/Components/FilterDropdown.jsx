import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const FilterDropdown = ({ title, options = [], selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative  w-auto">
      {/* Conteneur du dropdown */}
      <div
        className={`h-[45px] flex flex-row justify-between items-center py-[12px] px-[10px] rounded-full cursor-pointer transition-all 
        ${isOpen ? "border-2 border-Primary" : "border border-gray-400"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-[14px] sm:text-[16px] font-medium">{title}</p>
        <div className="flex flex-row gap-[10px] text-[12px] sm:text-[14px] font-light items-center">
          <span className="truncate max-w-[150px] sm:max-w-[200px]">{selected}</span>
          <IoIosArrowDown size={18} className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform`} />
        </div>
      </div>

      {/* Liste des options */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white border border-Primary mt-2 rounded-lg shadow-md z-10"
          role="listbox"
        >
          <div className="max-h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {options.map((option, index) => (
              <div
                key={index}
                className="p-3 hover:bg-gray-100 cursor-pointer text-[14px] sm:text-[16px]"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
