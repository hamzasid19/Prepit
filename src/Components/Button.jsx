import React from "react";

const Button = ({
  variant,
  text,
  extraClasses,
  bgVariant,
  children,
  handleClick,
  id,
  countInStock,
  qtyLimit,
}) => {
  return (
    <>
      {variant === "primary" ? (
        <button
          disabled={countInStock === 0}
          className={`cursor-pointer rounded-[80px] border border-white bg-[#171717]/70 text-2xl text-white duration-300 hover:bg-white hover:text-black ${extraClasses}`}
          onClick={handleClick ? handleClick : null}
        >
          {text}
        </button>
      ) : variant === "secondary" ? (
        <button
          disabled={countInStock === 0 ? true : false || qtyLimit}
          className={`cursor-pointer rounded-[80px] border text-xl ${
            bgVariant === "white"
              ? "border-white bg-white text-black duration-300 hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black"
              : bgVariant === "black"
                ? "border-black bg-black text-white duration-300 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white"
                : ""
          } ${extraClasses}`}
          onClick={handleClick ? handleClick : null}
        >
          {text}
        </button>
      ) : (
        <button
          id={id}
          className={`cursor-pointer ${extraClasses}`}
          onClick={handleClick ? handleClick : null}
        >
          {text}
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
