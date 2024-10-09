import React from "react";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";

export default function Products() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4 mb-6 lg:mb-0">
          <Filter />
        </div>
        <div className="lg:w-3/4">
          <Cards />
        </div>
      </div>
    </div>
  );
}
