"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Button(props: any) {
  const router = useRouter();

  const handleSubmit = () => {
    console.log("clicked");
    router.push("/products", { scroll: false });
  };

  return (
    <button
      onClick={handleSubmit}
      className="border-2 m-10 p-5 border-indigo-300 text-s uppercase font-bold"
    >
      {props.label}
    </button>
  );
}
