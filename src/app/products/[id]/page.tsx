import { Metadata } from "next";
import Button from "../../_private-components/button/page";

type Props = {
  params: {
    id: string;
  };
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `PRODUCT ${params.id}`,
    description: `DESCRIPTION FOR ${params.id}`,
  };
};

const ProductDetail = ({ params }: Props) => {
  const random = getRandomInt(4);
  if (random === 3) {
    throw new Error(`error found in product detail page ${params.id}`);
  }
  return (
    <>
      <h1>Product Detail {params.id}</h1>
      <Button label="Submit Cart" href="/" />
    </>
  );
};

export default ProductDetail;
