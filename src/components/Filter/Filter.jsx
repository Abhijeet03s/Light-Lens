import React from "react";

export default function Filter() {
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
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Category
            </option>
            <option>Blueglasses</option>
            <option>Sunglasses</option>
            <option>Eyeglasses</option>
          </select>
        </div>
        {/* Price */}
        <div>
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Price
            </option>
            <option>Highest to Low</option>
            <option>Low to Highest</option>
          </select>
        </div>
        {/* Stars */}
        <div>
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Rating
            </option>
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
