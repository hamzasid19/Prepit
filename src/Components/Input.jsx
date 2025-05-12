import React from "react";

const Input = ({
  placeholder,
  type,
  data,
  extraClasses,
  borderVariant,
  name,
  handleChange,
}) => {
  return (
    <input
      type={type}
      value={data}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      className={`w-full rounded-4xl border ${
        borderVariant === "gray"
          ? "border-gray-400 text-black"
          : borderVariant === "white"
            ? "border-white text-white"
            : ""
      } ${extraClasses}`}
    />
  );
};

export default Input;
