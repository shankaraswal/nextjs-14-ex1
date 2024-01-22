"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const menuObj = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Docs",
    href: "/docs",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Intercepting",
    href: "/intercepting/comp1",
  },
  {
    name: "User",
    href: "/user-login",
  },
];

export default function Navigation() {
  const pathName = usePathname();
  return (
    <header style={{ background: "orange", padding: "2rem" }}>
      <div className="flex justify-evenly">
        {menuObj.map((item, ind) => {
          const isAcctive = pathName.startsWith(item.href);
          return (
            <Link
              className={isAcctive ? "text-bold text-red" : "text-white"}
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
