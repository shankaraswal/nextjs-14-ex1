import Link from "next/link";

const Sectiond = () => {
  return (
    <div className="border border-orange-200 p-5 xl text-teal-900 text-left">
      <h3>Section D Title: </h3>
      <p className="mb-5">
        This is Section D data using slor or parallel routing/slot
      </p>
      <Link
        href="/dashboard/sectiond1"
        className="text-red-600 text-sm underline"
      >
        Go to Section D-1
      </Link>
    </div>
  );
};

export default Sectiond;
