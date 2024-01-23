import Link from "next/link";
import RouteHandlers from "./route-handlers/page";

export default function Home() {
  return (
    <div className="tetx-left">
      <h1 className="mb-5">Home page</h1>

      <Link
        href="/route-handlers"
        className="text-sm text-black text-left border border-red-500 m-3 p-3 font-bold underline block"
      >
        RouteHandlers Example
      </Link>
      <Link
        href="/route-handlers"
        className="text-sm text-black text-left border border-red-500 m-3 p-3 font-bold underline block"
      >
        RouteHandlers Example
      </Link>
      <Link
        href="/route-handlers"
        className="text-sm text-black text-left border border-red-500 m-3 p-3 font-bold underline block"
      >
        RouteHandlers Example
      </Link>
      <Link
        href="/route-handlers"
        className="text-sm text-black text-left border border-red-500 m-3 p-3 font-bold underline block"
      >
        RouteHandlers Example
      </Link>
    </div>
  );
}
