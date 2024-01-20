"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const authNavLinks = [
  { name: "Register", href: "/user-registration" },
  { name: "Login", href: "/user-login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <>
      <div className="text-lg text-black flex">
        <span className="text-sm mr-3">Nested Navigation:</span>
        {authNavLinks.map((item, ind) => {
          const isAcctive = pathName.startsWith(item.href);
          return (
            <Link
              className={
                isAcctive
                  ? "text-sm text-black mr-3 font-bold underline"
                  : "text-sm text-black mr-3 underline"
              }
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="border-orange-200 min-h-72 border-2 mt-5 p-5 bg-orange-100">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
