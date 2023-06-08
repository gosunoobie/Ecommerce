import React from "react";
import Cart from "./Cart";
import { useState } from "react";
import { useGlobalContext } from "../../contexts/globalContext";
const SideBar = () => {
  const { handleClick, showSidebar } = useGlobalContext();

  return (
    <>
      {showSidebar && (
        <div
          onClick={(e) => handleClick(e)}
          className="z-40  bg-black opacity-[.6] w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0  overflow-hidden "
        ></div>
      )}
      <section
        className={
          showSidebar
            ? "fixed  z-50 top-0 right-0 h-full w-full bg-white transition-right linear duration-[600ms] md:duration-[400ms] overflow-hidden flex flex-col md:w-[560px] visible"
            : "fixed  z-50 top-0 right-[-100vw] md:right-[-560px] h-full w-full bg-white transition-right linear duration-[600ms] md:duration-[400ms] overflow-hidden flex flex-col md:w-[560px] invisible"
        }
      >
        <header className=" flex grow-0 text-center w-full p-4 border-b-2 border-primary-200 h-14 items-center">
          <h3 className="text-xl grow  font-eina-02-semibold ">
            MY SHOPPING CART
          </h3>
          <i
            onClick={(e) => handleClick(e)}
            className=" fa-solid fa-circle-xmark text-[24px] grow-0 cursor-pointer
            hover:rotate-90 transition-all duration-300 ease-in hover:scale-[1.125]
            "
          ></i>
        </header>
        <Cart />
        <footer
          className="border-t-[1.5px] border-secondary-300 h-24 flex flex-col pt-2 pb-3 justify-between grow-0 w-full
        gap-1"
        >
          <h3 className="font-eina-02-semibold text-[14px] text-center">
            Subtotal : <span>$225</span>
          </h3>
          <button className="text-center  bg-black text-white font-inter-loose font-semibold text-[12px] py-2  uppercase mx-4 ">
            Checkout
          </button>
        </footer>
      </section>
    </>
  );
};

export default SideBar;
