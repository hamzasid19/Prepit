import React from "react";

const MenuMeal = ({ data }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-4xl border-2 border-black px-2 py-1 sm:w-1/3">
      <div className="mx-auto text-center">
        <p className="text-sm font-bold text-black">{data.quantity}</p>
        <p className="text-sm font-semibold text-black">{data.price}</p>
      </div>
      <p className="w-12 rounded-full bg-black px-2 py-1 text-center text-sm/snug text-white">
        {data.discount}
      </p>
    </div>
  );
};

export default MenuMeal;
