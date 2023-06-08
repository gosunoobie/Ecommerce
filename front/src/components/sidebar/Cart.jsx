import React from "react";
import { useState } from "react";
import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = [1];
  console.log(cartItems);

  if (cartItems.length === 0) {
    return (
      <h3 className="uppercase text-center ">Your cart looks a little empty</h3>
    );
  } else {
    return (
      <article className="flex flex-col mx-2 overflow-y-scroll grow-2 px-4">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </article>
    );
  }
};

export default Cart;
