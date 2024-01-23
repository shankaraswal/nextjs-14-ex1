import Link from "next/link";

export default function Home() {
  return (
    <div className="tetx-left">
      <h1 className="mb-5">Home page</h1>
    <nav className="bg-red-200">
      <Link
        href="/blog"
        className="text-sm text-teal-100 rounded m-3 p-3 font-bold underline block"
      >
        Blog Example
      </Link>
      <Link
        href="/dashboard"
        className="text-sm text-black text-left border border-red-500 m-3 p-3 font-bold underline block"
      >
        Dashboard Example
      </Link>
      <Link
        href="/docs"
        className="text-sm text-black text-left border border-red-500 m-3 p-3 font-bold underline block"
      >
        Docs Example
      </Link>
      <Link
        href="/products"
        className="text-sm text-black text-left border border-red-500 m-3 p-3 font-bold underline block"
      >
        Products List Example
      </Link>

      <Link
        href="/intercepting/comp1"
        className="text-sm text-black text-left border border-red-500 m-3 p-3 font-bold underline block"
      >
        Route Intercepting Example
      </Link>
      <Link
        href="/route-handlers"
        className="text-sm text-black text-left border border-red-500 m-3 p-3 font-bold underline block"
      >
        Route Handlers Example
      </Link>
      <Link
        href="/user"
        className="text-sm text-black text-left border border-red-500 m-3 p-3 font-bold underline block"
      >
        User Profile Pages
      </Link>
      </nav>
    </div>
  );
}
