import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/Context";
import { MdFilterList, MdClear } from "react-icons/md";
import PropTypes from 'prop-types';

export default function Filter({ isFilterExpanded, closeFilter }) {
  const {
    filterCategory,
    handleClearFilters,
    filterPriceRange,
    filterByRating,
    filterByColor,
    filterByShape,
  } = useContext(DataContext);

  const [priceRange, setPriceRange] = useState([0, 2500]);
  const [minRating, setMinRating] = useState(0);
  const [category, setCategory] = useState("All");
  const [color, setColor] = useState("All");
  const [shape, setShape] = useState("All");

  useEffect(() => {
    const resetFilters = () => {
      setPriceRange([0, 2500]);
      setMinRating(0);
      setCategory("All");
      setColor("All");
      setShape("All");
    };

    handleClearFilters(resetFilters);
  }, [handleClearFilters]);

  const handlePriceChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setPriceRange([0, newValue]);
  };

  const handleRatingChange = (rating) => {
    setMinRating(rating);
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    filterCategory(category); // Apply selected category
    filterByColor(color);
    filterByShape(shape);
    filterPriceRange(priceRange);
    filterByRating(minRating);

    closeFilter();
  };

  const handleClearAll = (e) => {
    e.preventDefault();
    handleClearFilters(() => {
      setPriceRange([0, 2500]);
      setMinRating(0);
      setCategory("All");
      setColor("All");
      setShape("All");
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 lg:p-6 sticky top-24">
      <div className="font-Inter space-y-4 lg:space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-lg lg:text-xl font-bold text-gray-800 flex items-center">
            <MdFilterList className="mr-2 text-[#4A99D3]" /> Filters
          </h2>
          <button
            onClick={handleClearAll}
            className="text-sm text-red-500 hover:text-red-700 transition-colors duration-300"
          >
            <MdClear className="inline mr-1" /> Clear All
          </button>
        </div>

        <form onSubmit={handleApplyFilters} className={`space-y-4 lg:space-y-6 ${isFilterExpanded ? 'block' : 'hidden lg:block'}`}>
          {/* Category */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="category" className="block text-xs lg:text-sm font-semibold text-gray-700">
              Category
            </label>
            <select
              id="category"
              className="w-full p-2 text-xs lg:text-sm border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A99D3] focus:border-[#4A99D3] transition-all duration-300"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="BlueLight">Blue Light</option>
              <option value="Optical">Optical</option>
              <option value="SunGlasses">SunGlasses</option>
            </select>
          </div>

          {/* Color */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="color" className="block text-xs lg:text-sm font-semibold text-gray-700">
              Color
            </label>
            <select
              id="color"
              className="w-full p-2 text-xs lg:text-sm border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A99D3] focus:border-[#4A99D3] transition-all duration-300"
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
              <option value="Matte Black">Matte Black</option>
              <option value="Black/Blue">Black/Blue</option>
              <option value="Pink">Pink</option>
              <option value="Transparent">Transparent</option>
              <option value="Matte Gold">Matte Gold</option>
            </select>
          </div>

          {/* Shape */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="shape" className="block text-xs lg:text-sm font-semibold text-gray-700">
              Shape
            </label>
            <select
              id="shape"
              className="w-full p-2 text-xs lg:text-sm border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A99D3] focus:border-[#4A99D3] transition-all duration-300"
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
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="priceRange" className="block text-xs lg:text-sm font-semibold text-gray-700">
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
            <div className="flex justify-between text-xs lg:text-sm text-gray-600">
              <span>₹0</span>
              <span>₹2500</span>
            </div>
          </div>

          {/* Minimum Rating */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="minRating" className="block text-xs lg:text-sm font-semibold text-gray-700">
              Minimum Rating
            </label>
            <select
              id="minRating"
              className="w-full p-2 text-xs lg:text-sm border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#4A99D3] focus:border-[#4A99D3] transition-all duration-300"
              value={minRating}
              onChange={(e) => handleRatingChange(Number(e.target.value))}
            >
              <option value={0}>All ratings</option>
              <option value={1}>1 & above</option>
              <option value={2}>2 & above</option>
              <option value={3}>3 & above</option>
              <option value={4}>4 & above</option>
              <option value={5}>5</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col lg:hidden">
            <button
              type="submit"
              className="w-full bg-[#4a99d3] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-[#3a7ca8]"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={handleClearAll}
              className="w-full bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mt-2 hover:bg-gray-400 transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Filter.propTypes = {
  isFilterExpanded: PropTypes.bool.isRequired,
  closeFilter: PropTypes.func.isRequired,
};