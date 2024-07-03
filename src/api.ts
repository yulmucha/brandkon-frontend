export interface ICategory {
  categoryId: number;
  imageUrl: string;
  categoryName: string;
}

export interface IBrand {
  brandId: number;
  imageUrl: string;
  brandName: string;
}

export interface IProduct {
  productId: number;
  imageUrl: string;
  price: number;
  productName: string;
  brandName: string;
}

export async function getData<T>(path: string): Promise<T> {
  const host = "http://localhost:8080";
  const response = await fetch(`${host}${path}`);
  if (!response.ok) {
    throw new Error();
  }

  return response.json();
}
