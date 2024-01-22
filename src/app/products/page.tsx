import React, { useEffect } from "react";
import Link from "next/link";

const generateRandomProductArray = (
  length: number,
  minValue: number,
  maxValue: number
) => {
  const uniqueSet = new Set();

  while (uniqueSet.size < length) {
    const randomNumber =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    uniqueSet.add(randomNumber);
  }

  return Array.from(uniqueSet);
};

const ProductList = () => {
  const randomArray = generateRandomProductArray(50, 100, 500);
  const sortedArray = randomArray?.sort((a: any, b: any) => a - b);

  return (
    <>
      <h1 className="mb-10 font-bold text-sm text-left">PRODUCT LIST PAGE:</h1>
      <div className="border-2 border-orange-200 p-5 text-justify">
        <div className="flex justify-between">
          <h2 className="text-emerald-700 font-bold mb-5"></h2>
        </div>
        <div className="gap-4 grid-cols-4 grid">
          {sortedArray?.map((val, ind) => (
            <div
              key={ind}
              className="text-xxl font-bold border border-teal-300 text-center"
            >
              <Link
                href={`/products/${val}`}
                className="block bg-teal-100 py-40"
              >{`ProductID ${val}`}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
