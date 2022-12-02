import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/Context";

export default function Filter() {
  const {
    filterProducts,
    filterCategory,
    handleClearFilters,
    filterPriceRange,
  } = useContext(DataContext);

  return (
    <>
      <div className="basis-64 lg:basis-72 p-4 h-min">
        <div className="font-Inter space-y-10">
          <div className="flex justify-between items-center px-[32px] lg:px-0">
            <h1 className="text-2xl">Filter</h1>
            <button
              onClick={handleClearFilters}
              className="bg-[#4A99D3] text-white rounded-md py-1 px-3"
            >
              Clear
            </button>
          </div>

          {/* Category */}

          <div className="flex justify-center border border-gray-600 rounded-sm">
            <select
              className="w-full max-w-xs p-1 rounded"
              value={filterProducts.category}
              onChange={filterCategory}
            >
              <option value="All">Category</option>
              <option value="BlueGlasses">Blueglasses</option>
              <option value="SunGlasses">Sunglasses</option>
              <option value="EyeGlasses">Eyeglasses</option>
            </select>
          </div>

          {/* Price */}

          <div className="flex justify-center border border-gray-600 rounded-sm">
            <select
              className="w-full max-w-xs p-1 rounded"
              value={filterProducts.price}
              onChange={filterPriceRange}
            >
              <option value="default">Price</option>
              <option value="High to Low">High to Low</option>
              <option value="Low to High">Low to High</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
