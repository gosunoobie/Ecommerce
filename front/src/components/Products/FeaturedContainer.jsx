import React, { useRef, useEffect } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import FeaturedProductCard from "./FeaturedProductCard";
import products from "../../assets/featuredProducts";
import useDrag from "../../hooks/useDrag";

const ProductsContainer = () => {
  const scrollableNodeRef = useRef(null);

  useDrag(scrollableNodeRef);

  return (
    <section className="w-[90vw] xl:w-[85vw] mx-auto">
      <h2 className="font-eina-02-semibold text-[1.675rem] my-10 underline underline-offset-4">
        Most Selling Products
      </h2>
      <SimpleBar
        style={{ maxHeight: "100%" }}
        autoHide={false}
        scrollableNodeProps={{ className: "flex-none" }}
        ref={scrollableNodeRef}
      >
        <div className="flex gap-[5%] md:gap-[2%] mb-5">
          {products.map((product, index) => (
            <div
              className="w-[100%] xs:w-[47.25%] md:w-[32%] xl:w-[32%] flex-none"
              key={index}
            >
              <FeaturedProductCard product={product} />
            </div>
          ))}
        </div>
      </SimpleBar>
    </section>
  );
};

export default ProductsContainer;
