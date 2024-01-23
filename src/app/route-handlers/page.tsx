"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GET } from "./api/route";

const RouteHandlers = () => {
  const [data, setData] = useState<any>([]);
  const [err, setErr] = useState<any>(null);

  useEffect(() => {
    GET()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setErr(error);
      });
  }, []);

  if (err) {
    throw new Error(err);
  }

  return (
    <>
      <h1 className="mb-10 font-bold text-sm text-left">
        ROUTE HANDLERS PRODUCT LIST PAGE:
      </h1>
      <div className="border-2 border-orange-200 p-5 text-justify">
        <div className="flex justify-between">
          <h2 className="text-emerald-700 font-bold mb-5"></h2>
        </div>
        <div className="gap-5 grid-cols-3 grid">
          {data?.data?.products.map((val: any, ind: number) => (
            <div
              key={ind}
              className="text-xxl font-bold border border-teal-300 text-center"
            >
              <img src={`${val.thumbnail}`} className="h-40  w-full" />
              <Link
                href={`/route-handlers/${val.thumbnail}`}
                className="block text-center p-5 font-normal text-sm"
              >{`ProductID ${val.title}`}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RouteHandlers;
