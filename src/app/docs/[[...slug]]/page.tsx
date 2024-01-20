export const generateMataData = ({ params }: any) => {
  return {
    title: `Blog ${params.id}`,
    description: `CUSTOM METADATA FOR Blog ${params.id}`,
  };
};
export default function CatchAllSegments({ params }: any) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        You are viewing for FEATURE: {params.slug[0]} and CHAPTER{" "}
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>You are viewing for FEATURE: {params.slug[0]}</h1>;
  }
  return <h1>Catch All segments </h1>;
}
