import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  removeItemFromCart,
} from "../slices/cartSlice/carSlice";
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem = ({ _id, image, name, price, qty, description }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={_id}
      className="mb-4 grid grid-cols-[1fr_.5fr_.2fr] md:grid-cols-[1fr_.8fr_.2fr]"
    >
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
        <img
          className="mx-auto h-full w-3/4 md:mx-0 md:w-1/3"
          src={image}
          alt=""
        />

        <h1 className="mx-auto text-center text-base font-semibold text-black sm:text-xl md:mx-0 md:text-left lg:text-2xl">
          {name}
        </h1>
        {/* <p className="mx-auto w-full text-center text-sm text-black sm:w-4/5 sm:text-lg md:mx-0 md:text-left lg:text-xl">
            {description}
          </p> */}
      </div>
      <p className="my-auto flex gap-2 text-xl text-black">
        <Button
          variant={"secondary"}
          bgVariant={"black"}
          extraClasses={"px-2"}
          text="+"
          handleClick={() => {
            dispatch(addToCart({ _id, qty }));
          }}
        />
        {qty}
        <Button
          variant={"secondary"}
          bgVariant={"black"}
          extraClasses={"px-2"}
          text="-"
          handleClick={() => {
            dispatch(decreaseQty({ _id, qty }));
          }}
        />
      </p>
      <p className="my-auto flex items-center justify-between gap-2 text-xl text-black">
        ${price * qty}{" "}
        <FaRegTrashAlt
          className="cursor-pointer"
          onClick={() => dispatch(removeItemFromCart({ _id }))}
        />
      </p>
    </div>
  );
};

export default CartItem;
