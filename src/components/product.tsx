import Link from "next/link";

export default function Product({
  price,
  brand,
  name,
  image,
  id,
}: {
  price: number;
  brand: string;
  name: string;
  image?: any;
  id: number;
}) {
  return (
    <Link href={`products/${id}`} className="w-full flex flex-col gap-1">
      <div className="bg-stone-200 rounded-md w-full aspect-square">
        {image}
      </div>
      <div className="font-semibold">{price}원</div>
      <div className="text-sm text-stone-600">
        <span>{brand}</span>
        <span> | </span>
        <span>{name}</span>
      </div>
    </Link>
  );
}
