import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
const ProductReview = ({ params }: any) => {
  if (parseInt(params.review) > 100) {
    notFound();
  }
  return (
    <>
      <>
        <h1 className="mb-10 font-bold text-sm text-left">
          PRODUCT REVIEW PAGE:
        </h1>
        <div className="border-2 border-orange-200 p-5 text-justify">
          <div className="flex justify-between">
            <h2 className="text-emerald-700 font-bold mb-5">
              ProductID-{params.id}: Review {params.review}
            </h2>

            <Link href={`/products/${params.id}/reviews`}>
              Back to Review list
            </Link>
          </div>
          <p>
            Patrick UK
            <br />
            5.0 out of 5 stars
            <br />
            <br />
            Brilliant - finally got my wires sorted! Reviewed in the United
            Kingdom on 16 May 2023 Verified Purchase These are wonderful! They
            bring order from chaos. I have now got all my trailing sockets stuck
            to my walls. No more wires all over the place! Only one slight
            downside. The adhesion is clearly calculated for US plugs. These are
            less than half the size and weight of UK plugs so fully populated UK
            strips can fall off. There are a number of ways round this.
            <br />
            <br />
            a) Mount them vertically - not horizontally.
            <br />
            b) Use multiple attachments per strip but keep them well separated
            otherwise you can end up making them unremovable.
            <br />
            c) Last resort - add some superglue to the strip side.
          </p>
        </div>
      </>
    </>
  );
};

export default ProductReview;
