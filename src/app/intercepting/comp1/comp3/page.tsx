import Link from "next/link";
import React from "react";

const Comp3 = () => {
  return (
    <>
      <h2 className="mb-4">This is Component 3</h2>
      <Link href="/intercepting/comp1/comp2">Go to Comp 2222</Link>
    </>
  );
};

export default Comp3;
