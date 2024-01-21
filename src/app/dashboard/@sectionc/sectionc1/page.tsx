import Link from "next/link";

const Sectionc1 = () => {
  return (
    <div className="border border-orange-200 p-5 xl text-teal-900 text-left">
      <h3>Section C-1 Title: </h3>
      <p className="mb-5">
        This is Section C-1 data using slor or parallel routing/slot
      </p>
      <Link href="/dashboard" className="text-red-600 text-sm underline">
        Back to Section C
      </Link>
    </div>
  );
};

export default Sectionc1;
