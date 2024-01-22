import Link from "next/link";
import React from "react";

const Comp1 = () => {
  return (
    <>
      <h2 className="mb-4">This is Component 1</h2>

      <br />
      <br />
      <br />
      <br />

      <Link href="/intercepting/comp1/comp2">Go to Comp 2</Link>
      <br />
      <br />
      <Link href="/intercepting/comp1/comp3">Go to Comp 3333332</Link>
    </>
  );
};

export default Comp1;
