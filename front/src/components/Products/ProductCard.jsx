import React from "react";

const ProductCard = ({ product }) => {
  const { name, img, description, price, reviews, ratings } = product;
  return (
    <article className="flex flex-col relative z-0 gap-2 my-1">
      <div
        className="absolute right-4 top-3 rounded-[50%] w-10 h-10 grid items-center justify-center cursor-pointer bg-secondary-800
      z-10
      hover:bg-love-200 "
      >
        <i className="fa-regular fa-heart text-xl"></i>
      </div>
      <div className="overflow-hidden bg-secondary-500 cursor-pointer rounded-lg">
        <img
          draggable="false"
          src={img}
          alt={name}
          className="w-5/6 md:w-[95%] m-auto hover:scale-[1.15] transition-transform ease-in"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-inter-loose font-semibold text-lg my-1 ">{name}</h4>
        <p className="font-inter-loose font-normal text-xs">{description}</p>

        <div className="flex justify-between">
          <div className="flex items-center my-1">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-1 text-sm font-inter-loose font-bold text-gray-900 dark:text-white">
              {ratings}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-inter-tight font-medium text-gray-900  underline hover:no-underline "
            >
              <span className="text-red-400  underline hover:no-underline ">
                {reviews}&nbsp;
              </span>{" "}
              reviews
            </a>
          </div>
          <div className="flex my-1">
            {/* <p className="font-inter-tight mr-1">
              <span className="text-xs font-bold relative bottom-[4px]">$</span>
              <span className=" ml-[1px] text-md font-semibold text-lg">
                999
              </span>
              <span className="text-xs font-bold relative bottom-[4px]">
                .00
              </span>
            </p> */}
            <p className="font-inter-tight">
              <span className="text-[13px] font-bold relative bottom-[4px] text-green-700">
                $
              </span>
              <span className=" ml-[1px] text-md font-semibold text-lg ">
                {price}
              </span>
              <span className="text-[13px] font-bold relative bottom-[4px]">
                .00
              </span>
            </p>
          </div>
        </div>
        <button
          className="rounded-3xl border-2
                border-primary-200 inline-flex gap-3 justify-center items-center py-[6px]
                w-[9.5rem] mt-[2px] font-eina-20-semibold 
                font-semibold  text-primary-200
                text-[14px] hover:text-white hover:bg-primary-200 transition-all ease-in duration-200
                "
        >
          <i className="fa-solid fa-bag-shopping text-lg"></i>
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
