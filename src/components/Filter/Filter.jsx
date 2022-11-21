import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/Context";

export default function Filter() {
  const { category, filterProduct, handleClearFilters } =
    useContext(DataContext);

  return (
    <>
      <div className="basis-72 p-4">
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

          <div className="flex justify-center">
            <select
              className="w-full max-w-xs p-1 rounded"
              value={filterProduct.category}
              onChange={category}
            >
              <option value="All">Category</option>
              <option value="BlueGlasses">Blueglasses</option>
              <option value="SunGlasses">Sunglasses</option>
              <option value="EyeGlasses">Eyeglasses</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
