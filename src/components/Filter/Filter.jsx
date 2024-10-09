import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/Context";
import { MdFilterList, MdClear, MdSearch, MdStar } from "react-icons/md";

export default function Filter() {
  const {
    filterProducts,
    filterCategory,
    handleClearFilters,
    filterPriceRange,
    filterByRating,
    searchProducts,
    sortByPrice,
  } = useContext(DataContext);

  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [minRating, setMinRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    // Reset local state when clear all is called
    const resetFilters = () => {
      setPriceRange([0, 5000]);
      setMinRating(0);
      setSearchTerm("");
      setSortOrder("default");
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

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    searchProducts(term);
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

        {/* Search */}
        <div className="space-y-3">
          <label htmlFor="search" className="block text-sm font-semibold text-gray-700">
            Search
          </label>
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="search"
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A99D3] focus:border-[#4A99D3]"
            />
          </div>
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

        {/* Price Range */}
        <div className="space-y-3">
          <label htmlFor="priceRange" className="block text-sm font-semibold text-gray-700">
            Price Range: ₹0 - ₹{priceRange[1]}
          </label>
          <input
            type="range"
            id="priceRange"
            min="0"
            max="5000"
            step="100"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹0</span>
            <span>₹5000</span>
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