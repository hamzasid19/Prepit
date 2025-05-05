import React from "react";
import Container from "../Components/Container";
import MenuMealData from "../data/MenuMealData";
import MenuMeal from "../Components/MenuMeal";
import MenuCardData from "../data/MenuCardData";
import MenuCard from "../Components/Cards/MenuCard";
import AccordionData from "../data/AccordionData";
import Accordiion from "../Components/Accordiion";

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [filterOpen, setFilterOpen] = React.useState(false);

  const handleOpen = () => setIsOpen((open) => !open);
  const handleFilterOpen = () => setFilterOpen((open) => !open);
  return (
    <section className="bg-white">
      <Container extraClasses=" py-10 relative">
        <div className="flex flex-wrap items-center justify-between gap-8 sm:flex-nowrap">
          {MenuMealData.map((item) => (
            <MenuMeal key={item.id} data={item} />
          ))}
        </div>

        <div className="my-6 flex w-full flex-col gap-4 rounded-2xl bg-black px-6 py-4">
          <div
            onClick={handleFilterOpen}
            className="mx-auto flex w-max cursor-pointer items-center gap-4 rounded-4xl border border-white px-2 py-2 text-white sm:mx-0 sm:px-6"
          >
            <svg
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
                  d="M18.48 18.5368H21M4.68 12L3 12.044M4.68 12C4.68 13.3255 5.75451 14.4 7.08 14.4C8.40548 14.4 9.48 13.3255 9.48 12C9.48 10.6745 8.40548 9.6 7.08 9.6C5.75451 9.6 4.68 10.6745 4.68 12ZM10.169 12.0441H21M12.801 5.55124L3 5.55124M21 5.55124H18.48M3 18.5368H12.801M17.88 18.6C17.88 19.9255 16.8055 21 15.48 21C14.1545 21 13.08 19.9255 13.08 18.6C13.08 17.2745 14.1545 16.2 15.48 16.2C16.8055 16.2 17.88 17.2745 17.88 18.6ZM17.88 5.4C17.88 6.72548 16.8055 7.8 15.48 7.8C14.1545 7.8 13.08 6.72548 13.08 5.4C13.08 4.07452 14.1545 3 15.48 3C16.8055 3 17.88 4.07452 17.88 5.4Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
            <p>Sports Goal & Preferences</p>
          </div>
          <div className="flex flex-col items-center gap-4 py-1 sm:flex-row">
            <div className="h-10 w-full grow-1 rounded-4xl border border-white sm:w-auto"></div>
            <div className="rounded-4xl bg-white px-5 py-2.5 text-black">
              0/12 Meals
            </div>
          </div>
        </div>

        <div
          className={`absolute top-0 right-0 z-9 w-4/5 space-y-6 border bg-white p-6 text-black shadow-xl transition-all duration-500 sm:w-96 ${filterOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold sm:text-4xl">Sporting goal</h2>
            <button
              onClick={() => setFilterOpen(false)}
              className="cursor-pointer rounded-full border-2 border-black px-2.5 py-1 text-sm font-semibold sm:text-lg"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2">
            <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
              Muscle Building <span>💪</span>
            </button>
            <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
              Skimming <span>🏋️‍♀️</span>
            </button>
            <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
              Bulking <span>❤️</span>
            </button>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-bold sm:text-4xl">
              Protein source
            </h2>
            <div className="space-y-2">
              <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
                Chicken <span>🍗</span>
              </button>
              <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
                Beef <span>🥩</span>
              </button>
              <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
                Salmon <span>🐟</span>
              </button>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-bold sm:text-4xl">Preferences</h2>
            <div className="space-y-2">
              <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
                Snacks <span>🍪</span>
              </button>
              <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
                Low carb <span>🌽</span>
              </button>
              <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
                Gluten Free <span>🚫🌾</span>
              </button>
              <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
                Lactose Free <span>🥛❌</span>
              </button>
              <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
                Low Fat <span>🧈❌</span>
              </button>
              <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
                Bestseller <span>🏆</span>
              </button>
              <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
                keto <span>🥑</span>
              </button>
            </div>
          </div>

          <div className="flex justify-between space-x-4 border-t pt-4">
            <button className="flex-1 cursor-pointer rounded-xl border py-2">
              Delete
            </button>
            <button className="flex-1 cursor-pointer rounded-xl bg-black py-2 text-white">
              Apply
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
          {MenuCardData.map((item) => (
            <MenuCard key={item.id} data={item} handleOpen={handleOpen} />
          ))}
        </div>

        <div>
          <div className="py-20 text-center text-black">
            <h1 className="inline rounded-4xl bg-black px-4 py-1 text-white">
              Our Answers
            </h1>
            <h1 className="p-6 text-4xl font-medium sm:text-6xl">
              Frequently asked questions
            </h1>

            <div>
              {AccordionData.map((item) => (
                <Accordiion key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`absolute top-0 right-[5%] z-9 w-[90%] bg-white p-4 text-black shadow-xl transition-all duration-500 sm:px-12 sm:py-14 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <div className="flex items-center justify-between pb-4">
            <h1 className="text-xl font-bold md:text-4xl">
              Chicken fajita bowl (XL, 2 portions)
            </h1>{" "}
            <svg
              width={"40px"}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
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
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#000000"
                  stroke-width="1.5"
                ></circle>{" "}
                <path
                  d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <img src={MenuCardData[0].img} className="mt-4 mb-8 w-full" alt="" />
          <div className="w-full space-y-4 lg:w-1/2">
            <h1 className="text-xl font-bold md:text-4xl">
              Chicken fajita bowl{" "}
              <span className="font-normal">
                {" "}
                - with rice and various vegetables (2 portions)
              </span>
            </h1>
            <p className="text-base font-light text-gray-400">
              Juicy chicken, aromatic fajita spices and colorful vegetables come
              together in a bowl with rice. A taste experience full of spice and
              variety that perfectly combines the flavors of chicken, spices and
              fresh vegetables
            </p>

            <h1 className="text-base font-bold md:text-2xl">
              Price:
              <span className="font-normal">
                {" "}
                from € 5.74 / portion - 2 portions
              </span>
            </h1>

            <h1 className="text-base font-bold md:text-2xl">
              Features:
              <span className="font-normal">
                {" "}
                 Healthy eating, Muscle building, Lactose- free, Paleo
              </span>
            </h1>

            <h1 className="text-base font-bold md:text-2xl">
              Net weight: 
              <span className="font-normal">  1000g </span>
            </h1>

            <h1 className="text-base font-bold md:text-2xl">
              Shelf life: 
              <span className="font-normal">  6 months in your freezer</span>
            </h1>

            <h1 className="text-base font-bold md:text-2xl">
              Preparation: 
              <span className="font-normal">
                {" "}
                 Microwave/ pan: 10-12 min; oven: 30 min
              </span>
            </h1>

            <h1 className="text-base font-bold md:text-2xl">Ingredients:</h1>

            <p className="pb-3 text-base font-normal md:text-2xl">
              Chicken breast fillet liquid seasoned, cooked [33%] (chicken
              breast meat, table salt, <br /> <br />
              starch), long grain rice cooked [30%] (water, rice, table salt),
              paprika [10%], <br /> <br />
              kidney beans [5.5%], corn [4%], tomatoes, onions, tomato puree,{" "}
              <br /> <br />
              olive oil, spices, garlic, sea salt, paprika, herbs, coriander,{" "}
              <br /> <br />
              apple juice concentrate, ground parsnips, lemon juice concentrate,
              smoked <br /> <br />
              paprika (paprika, smoke), lime juice concentrate.
            </p>

            <table className="sm:bordesm:r-collapse w-full p-1 text-left text-sm sm:text-base">
              <thead>
                <tr>
                  <th className="border p-1 text-sm font-bold sm:px-3 sm:py-2 sm:text-base">
                    Nutritional values
                  </th>
                  <th className="border p-1 text-sm font-bold sm:px-3 sm:py-2 sm:text-base">
                    Per 100g
                  </th>
                  <th className="border p-1 text-sm font-bold sm:px-3 sm:py-2 sm:text-base">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    Energy content
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    465kj/ 110kcal
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    4650kj/ 1100kcal
                  </td>
                </tr>
                <tr>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    Fat
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    2,1g
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    21g
                  </td>
                </tr>
                <tr>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    thereof saturated fatty acids
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    0,5g
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    5g
                  </td>
                </tr>
                <tr>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    Carbohydrates
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    11,5g
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    115g
                  </td>
                </tr>
                <tr>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    thereof sugar
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    1,3g
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    13g
                  </td>
                </tr>
                <tr>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    Protein
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    10,9g
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    109g
                  </td>
                </tr>
                <tr>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    Salt
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    1,01g
                  </td>
                  <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                    10,1g
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className={`fixed inset-0 z-8 bg-white/50 ${isOpen || filterOpen ? "block" : "hidden"}`}
        ></div>
      </Container>
    </section>
  );
};

export default Menu;
