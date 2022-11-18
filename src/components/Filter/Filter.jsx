import React from "react";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

export default function Filter() {
  const { filter, filterProduct} = useContext(FilterContext);

  return (
    <>
      <div className="font-Inter space-y-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Filter</h1>
          <button className="text-lg bg-gray-400 px-2 py-1 rounded-md">
            Clear
          </button>
        </div>

        {/* Category */}

        <div>
          <select
            className="w-full max-w-xs"
            value={filterProduct}
            onChange={filter}
          >
            <option value="All">Category</option>
            <option value="BlueGlasses">Blueglasses</option>
            <option value="SunGlasses">Sunglasses</option>
            <option value="EyeGlasses">Eyeglasses</option>
          </select>
        </div>

        {/* Price */}

        <div>
          <select className="w-full max-w-xs">
            <option>Price</option>
            <option>Highest to Low</option>
            <option>Low to Highest</option>
          </select>
        </div>

        {/* Stars */}

        <div>
          <select className="w-full max-w-xs">
            <option>Rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    </>
  );
}
