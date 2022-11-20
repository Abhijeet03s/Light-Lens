import React from "react";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
// import { DataContext } from "../../context/Context";

export default function Filter() {
  const { category, products } = useContext(FilterContext);

  return (
    <>
      <div className="basis-72 p-4">
        <div className="font-Inter space-y-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">Filter</h1>
            <button className="bg-[#4A99D3] text-white rounded-md py-1 px-3">
              Clear
            </button>
          </div>

          {/* Category */}

          <div>
            <select
              className="w-full max-w-xs"
              value={products.category}
              onChange={category}
            >
              <option value="All">Category</option>
              <option value="BlueGlasses">Blueglasses</option>
              <option value="SunGlasses">Sunglasses</option>
              <option value="EyeGlasses">Eyeglasses</option>
            </select>
          </div>

          {/* Price */}

          {/* <div>
          <select className="w-full max-w-xs">
            <option>Price</option>
            <option>Highest to Low</option>
            <option>Low to Highest</option>
          </select>
        </div> */}

          {/* Stars */}

          {/* <div>
          <select className="w-full max-w-xs">
            <option>Rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div> */}
        </div>
      </div>
    </>
  );
}
