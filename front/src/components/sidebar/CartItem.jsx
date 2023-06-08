import React from "react";

const CartItem = () => {
  return (
    <div className="flex py-3 gap-4 border-b-[1px] items-center">
      <div className="grow-0 bg-secondary-600 flex">
        <img
          src="/images/HandWatch.png"
          alt=""
          className="w-24 justify-center items-center"
        />
      </div>
      <aside className="grow-[2]">
        <h4
          className="font-inter-tight text-xs font-lightbold uppercase
        "
        >
          Men's Carabiner clasp chain bracelet
        </h4>
        <p className="text-[10.75px] mt-1">In Stock</p>

        <div className="inline-flex justify-center items-center gap-[14px] border-secondary-300 border-[1px] min-w-[78px] p-[3.25px] mt-6 text-secondary-300">
          <i className="fa-solid fa-minus text-[12px] hover:text-black hover:scale-[1.125] transition-all ease-in duration-300 cursor-pointer"></i>
          <p className="text-[13px] font-semibold text-black">1</p>
          <i className="fa-solid fa-plus text-[12px] hover:text-black hover:scale-[1.125] transition-all ease-in duration-300 cursor-pointer"></i>
        </div>
      </aside>

      <aside className="flex flex-col  gap-14 items-center">
        <i
          className="fa-solid fa-plus text-sm rotate-45 cursor-pointer
            hover:rotate-[135deg] transition-all duration-300 ease-in hover:scale-[1.125]"
        ></i>
        <p className="font-inter-loose text-sm">$105</p>
      </aside>
    </div>
  );
};

export default CartItem;
