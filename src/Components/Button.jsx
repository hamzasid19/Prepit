import React from "react";

const Button = ({ variant, text, extraClasses, bgVariant }) => {
  return (
    <>
      {variant === "primary" ? (
        <button
          className={`cursor-pointer rounded-[80px] border border-white bg-[#171717]/70 text-2xl text-white ${extraClasses}`}
        >
          {text}
        </button>
      ) : variant === "secondary" ? (
        <button
          className={`cursor-pointer text-xl ${
            bgVariant === "white" ? "text-black" : "text-white"
          } text-black} rounded-[80px] ${
            bgVariant === "white" ? "bg-white" : "bg-black"
          } ${extraClasses}`}
        >
          {text}
        </button>
      ) : variant === "tertiary" ? (
        <button
          className={`cursor-pointer rounded-lg bg-black text-2xl text-white ${extraClasses}`}
        >
          {text}
        </button>
      ) : null}
    </>
  );
};

export default Button;
