"use client";
import { downArrow, leftArrow } from "@/assets/icon";
import ProdTopBar from "@/components/ProdTopBar";
import FilterSideBar from "@/components/products-components/FilterSideBar";
import React, { useState } from "react";

const ProductLayout = ({
  totalCount,
  children,
}: {
  totalCount: number;
  children: React.ReactNode;
}) => {
  const [showFilters, setShowFilters] = useState(true);
  return (
    <div className="min-h-screen  md:py-8">
      {/* Top Bar */}
      <ProdTopBar />
      {/* Main Content */}
      <div className="flex flex-col p-4">
        {/* Top Bar Filter Content */}
        <div className="flex justify-between border-y-2 p-3 md:py-6">
          <div className="hidden md:flex items-center justify-between gap-10 min-w-[300px]">
            <p className="uppercase font-bold">{totalCount ?? 0} items</p>
            <p
              className={
                "flex items-center justify-between gap-2 text-gray-400 cursor-pointer"
              }
              onClick={() => setShowFilters(!showFilters)}
            >
              <span>{leftArrow}</span>
              <span className="underline">
                {showFilters ? "HIDE" : "SHOW"} FILTER
              </span>
            </p>
          </div>
          <div
            className={
              "md:hidden w-full flex items-center justify-center gap-2 border-r-2"
            }
          >
            <span>FILTER</span>
          </div>
          <div
            className={
              "md:w-max flex items-center w-full justify-center md:justify-between gap-2"
            }
          >
            <span>RECOMMENDED</span>
            <span className="cursor-pointer">{downArrow}</span>
          </div>
        </div>
        {/* Main Content Area */}
        <main className="flex-1 flex">
          {showFilters && (
            <aside className="hidden md:block p-4 min-w-[300px]">
              <FilterSideBar />
            </aside>
          )}
          {children}
        </main>
      </div>
    </div>
  );
};

export default ProductLayout;
