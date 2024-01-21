import Link from "next/link";

const Terms = () => {
  return (
    <div className="border border-orange-200 p-5 xl text-teal-900 text-left">
      <h3>PLEASE ACCEPT TERMS: </h3>
      <p className="mb-5">
        This is Section D data using slor or parallel routing/slot
      </p>
      <Link
        href={{ pathname: "/dashboard", query: { terms: true } }}
        className="text-red-600 text-sm underline"
      >
        ACCEPT
      </Link>
    </div>
  );
};

export default Terms;
