import React from "react";
import { Metadata } from "next";
import Button from "../../_private-components/button/page";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `PRODUCT ${params.id}`,
    description: `DESCRIPTION FOR ${params.id}`,
  };
};

const ProductDetail = ({ params }: Props) => {
  return (
    <>
      <h1>Product Detail {params.id}</h1>
      <Button label="Submit Cart" href="/" />
    </>
  );
};

export default ProductDetail;
