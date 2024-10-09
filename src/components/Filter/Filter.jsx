import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/Context";
import { MdFilterList, MdClear, MdStar } from "react-icons/md";

export default function Filter() {
  const {
    filterProducts,
    filterCategory,
    handleClearFilters,
    filterPriceRange,
    filterByRating,
    sortByPrice,
  } = useContext(DataContext);

  const [priceRange, setPriceRange] = useState([0, 2500]);
  const [minRating, setMinRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("default");

  const [color, setColor] = useState("All");
  const [frameStyle, setFrameStyle] = useState("All");
  const [shape, setShape] = useState("All");
  const { filterByColor, filterByFrameStyle, filterByShape } = useContext(DataContext);

  useEffect(() => {
    const resetFilters = () => {
      setPriceRange([0, 2500]);
      setMinRating(0);
      setSortOrder("default");
      setColor("All");
      setFrameStyle("All");
      setShape("All");
    };

    handleClearFilters(resetFilters);
  }, [handleClearFilters]);

  const handlePriceChange = (event) => {
    const newValue = parseInt(event.target.value);
    setPriceRange([priceRange[0], newValue]);
    filterPriceRange([priceRange[0], newValue]);
  };

  const handleRatingChange = (rating) => {
    setMinRating(rating);
    filterByRating(rating);
  };

  const handleSortChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);
    sortByPrice(order);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 sticky top-24">
      <div className="font-Inter space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <MdFilterList className="mr-2 text-[#4A99D3]" /> Filters
          </h2>
          <button
            onClick={() => handleClearFilters()}
            className="text-sm text-red-500 hover:text-red-700 transition-colors duration-300"
          >
            <MdClear className="inline mr-1" /> Clear All
          </button>
        </div>

        {/* Category */}
        <div className="space-y-3">
          <label htmlFor="category" className="block text-sm font-semibold text-gray-700">
            Category
          </label>
          <select
            id="category"
            className="w-full p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A99D3] focus:border-[#4A99D3] transition-all duration-300"
            value={filterProducts.category}
            onChange={filterCategory}
          >
            <option value="All">All Categories</option>
            <option value="BlueLightGlasses">BlueLight Glasses</option>
            <option value="SunGlasses">Sun Glasses</option>
            <option value="ScreenGlasses">Screen Glasses</option>
          </select>
        </div>

        {/* Color */}
        <div className="space-y-3">
          <label htmlFor="color" className="block text-sm font-semibold text-gray-700">
            Color
          </label>
          <select
            id="color"
            className="w-full p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A99D3] focus:border-[#4A99D3] transition-all duration-300"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              filterByColor(e.target.value);
            }}
          >
            <option value="All">All Colors</option>
            <option value="Gray">Gray</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Gold">Gold</option>
            <option value="Red">Red</option>
            <option value="Silver">Silver</option>
            <option value="Pink">Pink</option>
            <option value="Transparent">Transparent</option>
          </select>
        </div>

        {/* Frame Style */}
        <div className="space-y-3">
          <label htmlFor="frameStyle" className="block text-sm font-semibold text-gray-700">
            Frame Style
          </label>
          <select
            id="frameStyle"
            className="w-full p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A99D3] focus:border-[#4A99D3] transition-all duration-300"
            value={frameStyle}
            onChange={(e) => {
              setFrameStyle(e.target.value);
              filterByFrameStyle(e.target.value);
            }}
          >
            <option value="All">All Styles</option>
            <option value="Full Rim">Full Rim</option>
          </select>
        </div>

        {/* Shape */}
        <div className="space-y-3">
          <label htmlFor="shape" className="block text-sm font-semibold text-gray-700">
            Shape
          </label>
          <select
            id="shape"
            className="w-full p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A99D3] focus:border-[#4A99D3] transition-all duration-300"
            value={shape}
            onChange={(e) => {
              setShape(e.target.value);
              filterByShape(e.target.value);
            }}
          >
            <option value="All">All Shapes</option>
            <option value="Square">Square</option>
            <option value="Rectangle">Rectangle</option>
            <option value="Wayfarer">Wayfarer</option>
            <option value="Cat Eye">Cat Eye</option>
            <option value="Round">Round</option>
            <option value="Aviator">Aviator</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <label htmlFor="priceRange" className="block text-sm font-semibold text-gray-700">
            Price Range: ₹0 - ₹{priceRange[1]}
          </label>
          <input
            type="range"
            id="priceRange"
            min="0"
            max="2500"
            step="100"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹0</span>
            <span>₹2500</span>
          </div>
        </div>

        {/* Sort by Price */}
        <div className="space-y-3">
          <label htmlFor="sortPrice" className="block text-sm font-semibold text-gray-700">
            Sort by Price
          </label>
          <select
            id="sortPrice"
            className="w-full p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A99D3] focus:border-[#4A99D3] transition-all duration-300"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>

        {/* Rating */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Minimum Rating
          </label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRatingChange(star)}
                className={`text-2xl focus:outline-none ${star <= minRating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                <MdStar />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}