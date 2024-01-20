import React from "react";
import { notFound } from "next/navigation";
const ProductReview = ({ params }: any) => {
  if (parseInt(params.review) > 100) {
    notFound();
  }
  return (
    <>
      <h1>Product {params.id}</h1>
      <h1>Product Review Detail {params.review}</h1>
    </>
  );
};

export default ProductReview;
