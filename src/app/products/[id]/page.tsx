import { Metadata } from "next";
import Button from "../../_private-components/button/page";
import Link from "next/link";

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
      <h1 className="mb-10 font-bold text-sm text-left">
        PRODUCT DETAIL PAGE:
      </h1>
      <div className="border-2 border-orange-200 p-5 text-justify">
        <div className="flex justify-between">
          <h2 className="text-emerald-700 font-bold mb-5">
            ProductID-{params.id}
          </h2>

          <Link href={`/products/${params.id}/reviews`}>
            Go to Product Reviews
          </Link>
        </div>
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <br />
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="text-right">
          <Button label="Submit Cart" href="/" />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
