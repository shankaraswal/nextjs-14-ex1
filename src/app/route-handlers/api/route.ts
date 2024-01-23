export const GET = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    // cache: "no-store",
    next: { revalidate: 2 },
  });
  const data = await res.json();

  return Response.json({ data });
};
