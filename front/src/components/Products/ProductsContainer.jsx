import React from "react";
import ProductCard from "./ProductCard";
import products from "../../assets/product";

const ProductsContainer = () => {
  return (
    <section className="w-[80vw] xs:w-[90vw] xl:w-[85vw] mx-auto ">
      <h2 className="font-eina-02-semibold text-[1.675rem] my-10 underline underline-offset-4">
        Todays Best Deals For You!
      </h2>
      <section
        className="grid
        w-full 
        my-10 
        grid-cols-1 xs:grid-cols-2  gap-5  md:grid-cols-3  lg:grid-cols-4  "
      >
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </section>
    </section>
  );
};

export default ProductsContainer;
