import React from "react";
import Link from "next/link";
import { Vidaloka } from "next/font/google";
const ProductList = () => {
  const pid = [101, 105, 12, 14, 18, 45, 150, 123, 22, 5, 75, 85, 166];

  return (
    <>
      <h1>PRODUCT LIST</h1>
      <hr />
      <ul>
        {pid
          .sort((a, b) => a - b)
          .map((val: number, ind: number) => (
            <li key={val}>
              <Link href={`/products/${val}`}>{`Product ${val}`}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProductList;
