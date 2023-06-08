import React from "react";
import { useGlobalContext } from "../../contexts/globalContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const { showSidebar, handleClick } = useGlobalContext();
  return (
    <nav className="flex h-14 items-center px-5 justify-between border-b-[1.5px] fixed top-0 right-0 w-full bg-secondary-500 z-10 shadow-lg">
      <LuMenu className="text-[28px] cursor-pointer hover:scale-[1.2] transition-all ease-in-out duration-300 " />

      <img src="/public/svg/logo.svg" alt="" className="w-[86px]" />
      <AiOutlineShoppingCart
        className="text-[30px] cursor-pointer hover:scale-[1.15] transition-all ease-in-out duration-300 font-light"
        onClick={handleClick}
      />

      {/* <Navlinks /> */}
    </nav>
  );
};

export default Navbar;
