import Link from "next/link";

const Sectiond1 = () => {
  return (
    <div className="border border-orange-200 p-5 xl text-teal-900 text-left">
      <h3>Section D-1 Title: </h3>
      <p className="mb-5">
        This is Section D-1 data using slor or parallel routing/slot
      </p>
      <Link href="/dashboard" className="text-red-600 text-sm underline">
        Back to Section D
      </Link>
    </div>
  );
};

export default Sectiond1;
