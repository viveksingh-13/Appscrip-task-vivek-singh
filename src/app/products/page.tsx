import Card from "@/components/products-components/Card";
import Head from "next/head";
export interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Productlist = ({ products }: any) => {
  return (
    <main className="w-full grid grid-cols-2 md:grid-cols-3 justify-items-center place-content-center gap-2">
      <Head>
        <title>Products</title>
        <meta
          name="description"
          content={`Explore products with great pricing here.`}
        />
        {/* Add more meta tags as needed for SEO */}
      </Head>
      {products?.map((product: product) => {
        return (
          <Card
            image={product?.image}
            price={product?.price}
            title={product?.title}
            key={product?.id}
          />
        );
      })}
    </main>
  );
};

export default Productlist;
