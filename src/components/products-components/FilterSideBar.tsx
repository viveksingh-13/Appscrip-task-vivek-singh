import { downArrow } from "@/assets/icon";
import { filterDropDownItems } from "@/common/dropdownFilters";
import React from "react";

const FilterSideBar = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <div className="py-4 border-b-2 w-full">
        <label className="uppercase font-semibold flex gap-3">
          <input type="checkbox" className="w-4" /> <span>Customizble</span>
        </label>
      </div>
      {filterDropDownItems?.map((filterItems, index: number) => {
        return (
          <div
            className="py-5 border-b-2 w-full cursor-pointer flex justify-between items-center"
            key={filterItems.title + index}
          >
            <span className="uppercase font-semibold flex gap-3">
              {filterItems.title}
            </span>
            <span>{downArrow}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FilterSideBar;
