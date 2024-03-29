import Link from "next/link";

const Sectionc = () => {
  return (
    <div className="border border-orange-200 p-5 xl text-teal-900 text-left">
      <h3>Section C Title: </h3>
      <p className="mb-5">
        This is Section C data using slor or parallel routing/slot
      </p>
      <Link
        href="/dashboard/sectionc1"
        className="text-red-600 text-sm underline"
      >
        Go to Section C-1
      </Link>
    </div>
  );
};

export default Sectionc;
