import { useState } from "react";
import ProductLayout from "./ProductLayout";
import Productlist, { product } from "./products/page";
async function getData() {
  const res = await fetch(`https://fakestoreapi.com/products?limit=20`);
  return res.json();
}
export default async function Home() {
  const products: product[] = await getData();
  return (
    <ProductLayout totalCount={products?.length}>
      {" "}
      <Productlist products={products} />
    </ProductLayout>
  );
}
