import React from "react";

const CartItem = ({ data }) => {
  return (
    <div className="mb-4 grid grid-cols-[1fr_.5fr_.2fr] md:grid-cols-[1fr_.8fr_.2fr]">
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
        <img
          className="mx-auto h-full w-3/4 md:mx-0 md:w-1/3"
          src={data.img}
          alt=""
        />
        <div className="space-y-1">
          <h1 className="text-center text-base font-semibold text-black sm:text-xl md:text-left lg:text-2xl">
            {data.title}
          </h1>
          <p className="mx-auto w-full text-center text-sm text-black sm:w-4/5 sm:text-lg md:mx-0 md:text-left lg:text-xl">
            {data.description}
          </p>
        </div>
      </div>
      <p className="my-auto text-xl text-black">{data.quantity}</p>
      <p className="my-auto text-xl text-black">{data.price}</p>
    </div>
  );
};

export default CartItem;
