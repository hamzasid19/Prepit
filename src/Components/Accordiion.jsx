import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const Accordiion = ({ data }) => {
  const [active, setActive] = React.useState(false);
  const toggleAccordion = () => setActive(!active);
  return (
    <>
      <div
        onClick={toggleAccordion}
        className="relative flex cursor-pointer items-center justify-between gap-4 border-b-2 border-gray-300 py-4 text-left text-black"
      >
        <h1 className="text-xl font-semibold sm:text-2xl">{data.faq}</h1>
        <FaChevronDown />
      </div>

      <div
        className={`flex ${active ? "max-h-[500px] py-10" : "max-h-0"} w-full items-center justify-center overflow-hidden bg-gray-100 px-4 text-base transition-all duration-300 sm:text-xl`}
      >
        {data.answer}
      </div>
    </>
  );
};

export default Accordiion;
