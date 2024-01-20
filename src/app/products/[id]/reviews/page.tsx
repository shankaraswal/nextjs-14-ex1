import Button from "@/app/_private-components/button/page";
import Link from "next/link";

export const ProductReviews = ({ params }: any) => {
  const topTenReviews = Array.from({ length: 10 });

  return (
    <>
      <h1 className="mb-10 font-bold text-sm text-left">
        PRODUCT REVIEW LIST for:
      </h1>
      <div className="border-2 border-orange-200 p-5 text-justify">
        <div className="flex justify-between">
          <h2 className="text-emerald-700 font-bold mb-5">
            ProductID-{params.id} top 10 reviews
          </h2>

          <Link href={`/products/${params.id}`}>Back to Product Detail</Link>
        </div>
        {topTenReviews.map((_, index) => (
          <div key={index}>
            <Link href={`/products/${params.id}/reviews/${index + 1}`}>
              Review {index + 1}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductReviews;
