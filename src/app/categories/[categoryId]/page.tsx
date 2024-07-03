import { IBrand, ICategory, IProduct, getData } from "@/api";
import Category from "@/components/category";

export default async function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const categories = await getData<ICategory[]>(`/categories`);

  const products = await getData<IProduct[]>(
    `/products?categoryId=${params.categoryId}`
  );
  const popularProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (popularProducts.length >= 3) {
      break;
    }
    popularProducts.push(
      <a href={`/products/${products[i].productId}`} key={i}>
        <div>{popularProducts.length + 1}위</div>
        <div>{`${products[i].brandName} | ${products[i].productName}`}</div>
        <div>{products[i].price.toLocaleString()}원</div>
      </a>
    );
  }

  const brands = await getData<IBrand[]>(
    `/brands?categoryId=${params.categoryId}`
  );

  return (
    <div>
      <div>카테고리 ID: {params.categoryId}</div>
      <div className="grid grid-cols-4 gap-2 py-4">
        <Category
          name={"추천"}
          href={"/"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FFD700"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
        {categories.map((c, index) => (
          <Category
            name={c.categoryName}
            href={`/categories/${c.categoryId}`}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                />
              </svg>
            }
            key={index}
          />
        ))}
      </div>
      <div>{popularProducts}</div>
      <div>
        <div className="font-semibold">브랜드</div>
        <div>
          {brands.map((b, index) => (
            <a href={`/brands/${b.brandId}`} key={index}>
              <div>{b.brandName}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
