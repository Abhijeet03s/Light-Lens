import React, { useState } from "react";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import { MdFilterList } from "react-icons/md";

export default function Products() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const closeFilter = () => {
    setIsFilterVisible(false);
  };

  return (
    <div className="container mx-auto py-4 lg:py-8 px-4 lg:px-8">
      <div className="lg:hidden mb-4 flex justify-end">
        <button
          onClick={toggleFilter}
          className="bg-[#4a99d3] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center"
        >
          <MdFilterList className="mr-2" /> {isFilterVisible ? "Hide Filters" : "Show Filters"}
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className={`lg:w-1/4 mb-6 lg:mb-0 ${isFilterVisible ? 'block' : 'hidden lg:block'}`}>
          <Filter isFilterExpanded={isFilterVisible} closeFilter={closeFilter} />
        </div>
        <div className="lg:w-3/4">
          <Cards />
        </div>
      </div>
    </div>
  );
}
