import React from "react";

export default function UserLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 block">
      <h2 className="text-xl m-10 uppercase border-1">{children}</h2>
      <h1 className="uppercase p-4 text-lg border-1">
        User Login with custom layout Layout/sections
      </h1>
      <hr />
    </div>
  );
}
