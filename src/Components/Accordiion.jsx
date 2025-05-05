import React from "react";

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
        <svg
          className="max-w-[20px] min-w-[20px] grow-1"
          width="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
              fill="#000000"
            ></path>{" "}
          </g>
        </svg>
      </div>

      <div
        className={`flex ${active ? "max-h-[500px] py-10" : "max-h-0"} w-full items-center justify-center overflow-hidden bg-gray-100 px-4 text-base transition-all duration-500 sm:text-xl`}
      >
        {data.answer}
      </div>
    </>
  );
};

export default Accordiion;
