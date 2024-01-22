import Link from "next/link";
import React from "react";

const Comp2 = () => {
  return (
    <>
      <h2 className="mb-4">This is Component 2</h2>
      <Link href="/intercepting/comp1">Go back to Comp 1</Link>
    </>
  );
};

export default Comp2;
