export default function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  return <div>카테고리 ID: {params.categoryId}</div>;
}
