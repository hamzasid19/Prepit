import React from "react";

const HomeMenuCard = ({ data }) => {
  return (
    <div className="w-full cursor-pointer overflow-hidden rounded-2xl bg-white text-center text-black sm:w-1/2 md:w-1/3 lg:w-auto">
      <img className="w-full" src={data.img} alt="" />
      <h1 className="py-4 text-2xl font-semibold">{data.title}</h1>
    </div>
  );
};

export default HomeMenuCard;
