import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { changeMealQty } from "../slices/mealSlice/mealSlice";

const MenuMeal = ({ data, setMeal, meal }) => {
  const dispatch = useDispatch();
  return (
    <Button
      key={data.id}
      id={data.id}
      handleClick={
        data.id === 1
          ? () => dispatch(changeMealQty(4))
          : data.id === 2
            ? () => dispatch(changeMealQty(6))
            : data.id === 3
              ? () => dispatch(changeMealQty(8))
              : null
      }
      extraClasses={`flex w-full items-center text-black duration-300 justify-between rounded-4xl 
        border-2 border-black px-2 py-1 sm:w-1/3 bg:transparent 
        ${meal === 4 && data.id === 1 ? "bg-black text-white" : meal === 6 && data.id === 2 ? "bg-black text-white" : meal === 8 && data.id === 3 ? "bg-black text-white" : ""}`}
    >
      <div className="mx-auto text-center">
        <p className="text-sm font-bold">{data.quantity}</p>
        <p className="text-sm font-semibold">{data.price}</p>
      </div>
      <p className="w-12 rounded-full bg-black px-2 py-1 text-center text-sm/snug text-white">
        {data.discount}
      </p>
    </Button>
  );
};

export default MenuMeal;
