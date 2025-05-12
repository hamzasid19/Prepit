import React from "react";

const NutritionCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-6 text-black lg:max-w-1/3">
      <img className="h-20 w-20" src={data.img} alt="" />
      <h1 className="pt-4 text-xl font-semibold">{data.title}</h1>
      <p className="text-lg text-gray-400">{data.description}</p>
    </div>
  );
};

export default NutritionCard;
