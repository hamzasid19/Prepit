import React from "react";
import Button from "../Button";

const MenuCard = ({ data, handleOpen }) => {
  return (
    <div className="relative grid grid-rows-[1fr_auto_auto]">
      <img
        className="w-full cursor-pointer"
        onClick={handleOpen}
        src={data.img}
        alt=""
      />
      <p className="absolute top-4 left-0 rounded-tr-4xl rounded-br-4xl bg-black p-2 pr-4">
        {data.price}
      </p>
      <p className="absolute top-16 left-0 rounded-tr-4xl rounded-br-4xl bg-black p-2 pr-4">
        {data.premium}
      </p>
      <div className="grid grid-cols-4 gap-6 pt-4 text-center">
        {data["nutrition"].map((item) => {
          return (
            <div className="bg-gray-300/70 py-2 text-black">
              <h1 className="font-bold">{item.quantity}</h1>
              <p className="font-semibold">{item.type}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="pb-2 text-4xl/loose font-bold text-black">
          {data.name}
        </h1>
        <Button
          variant="secondary"
          bgVariant="black"
          text={data.btnText}
          extraClasses="w-full py-2 text-center rounded-xl"
        />
      </div>
    </div>
  );
};

export default MenuCard;
