import Image from "next/image";
interface prop {
  title: string;
  image: string;
  price: number;
}
const ProductCard = ({ image, title, price }: prop) => {
  return (
    <div className="max-w-xs mx-auto overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title + " image"}
          layout="fill"
          className="rounded-t-md object-contain"
        />
      </div>
      <div className="p-4">
        <p className="text-sm md:text-lg font-semibold break-words">{title}</p>
        <p className="text-gray-400 text-sm md:text-base">
          <span className="underline">Sign in </span> or Create an account to
          see pricing
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
