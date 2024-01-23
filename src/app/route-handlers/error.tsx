"use client";
import RouteHandlers from "./page";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="text-red-500">
      <h3 className="mb-10 text-lg">Error message: RouteHandlers</h3>
      <span className="text-xl">{error.message}</span>
    </div>
  );
}
