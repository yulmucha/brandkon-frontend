import Link from "next/link";

export default function Category({
  name,
  icon,
  href,
}: {
  name: string;
  icon: any;
  href: string;
}) {
  return (
    <Link href={href} className="w-full rounded-md hover:bg-stone-100 p-1">
      <div className="w-full flex flex-col justify-center gap-1 items-center">
        <div>{icon}</div>
        <div className="text-sm text-stone-700">{name}</div>
      </div>
    </Link>
  );
}
