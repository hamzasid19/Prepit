import { CgCloseO } from "react-icons/cg";
import {
  LuBeef,
  LuBicepsFlexed,
  LuMilkOff,
  LuWheat,
  LuWheatOff,
} from "react-icons/lu";
import { PiSpeedometerLight } from "react-icons/pi";
import { TbHeartCheck } from "react-icons/tb";
import { GiAvocado, GiChickenOven, GiSalmon } from "react-icons/gi";
import { FaPlateWheat } from "react-icons/fa6";
import { FaTintSlash } from "react-icons/fa";
import { BestSellerIcon } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { closeFilterModal } from "../../slices/modalSlice/filterModalSlice";

const FilterPopup = ({ isFeature, setIsFeature }) => {
  const dispatch = useDispatch();
  const { openFilter } = useSelector((store) => store.filterModal);

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 z-20 w-4/5 space-y-6 overflow-y-auto border bg-white p-6 text-black shadow-xl transition-all duration-500 sm:w-96 ${openFilter ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-4xl">Sporting goal</h2>
        <button
          className="cursor-pointer"
          onClick={() => dispatch(closeFilterModal())}
        >
          <CgCloseO className="h-6 w-6" />
        </button>
      </div>

      <div className="space-y-2">
        <button
          onClick={() =>
            setIsFeature((prev) =>
              prev.includes("MuscleBuilding")
                ? prev.filter((item) => item !== "MuscleBuilding")
                : [...prev, "MuscleBuilding"],
            )
          }
          className={`${isFeature.includes("MuscleBuilding") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
        >
          Muscle Building <LuBicepsFlexed />
        </button>
        <button
          onClick={() =>
            setIsFeature((prev) =>
              prev.includes("Slimming")
                ? prev.filter((item) => item !== "Slimming")
                : [...prev, "Slimming"],
            )
          }
          className={`${isFeature.includes("Slimming") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
        >
          Slimming <PiSpeedometerLight />
        </button>
        <button
          onClick={() =>
            setIsFeature((prev) =>
              prev.includes("Bulking")
                ? prev.filter((item) => item !== "Bulking")
                : [...prev, "Bulking"],
            )
          }
          className={`${isFeature.includes("Bulking") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
        >
          Bulking <TbHeartCheck />
        </button>
      </div>

      <div>
        <h2 className="mb-6 text-xl font-bold sm:text-4xl">Protein source</h2>
        <div className="space-y-2">
          <button
            onClick={() =>
              setIsFeature((prev) =>
                prev.includes("Chicken")
                  ? prev.filter((item) => item !== "Chicken")
                  : [...prev, "Chicken"],
              )
            }
            className={`${isFeature.includes("Chicken") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Chicken <GiChickenOven />
          </button>
          <button
            onClick={() =>
              setIsFeature((prev) =>
                prev.includes("Beef")
                  ? prev.filter((item) => item !== "Beef")
                  : [...prev, "Beef"],
              )
            }
            className={`${isFeature.includes("Beef") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Beef <LuBeef />
          </button>
          <button
            onClick={() =>
              setIsFeature((prev) =>
                prev.includes("Salmon")
                  ? prev.filter((item) => item !== "Salmon")
                  : [...prev, "Salmon"],
              )
            }
            className={`${isFeature.includes("Salmon") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Salmon <GiSalmon />
          </button>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-xl font-bold sm:text-4xl">Preferences</h2>
        <div className="space-y-2">
          <button
            onClick={() =>
              setIsFeature((prev) =>
                prev.includes("Snacks")
                  ? prev.filter((item) => item !== "Snacks")
                  : [...prev, "Snacks"],
              )
            }
            className={`${isFeature.includes("Snacks") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Snacks <FaPlateWheat />
          </button>
          <button
            onClick={() =>
              setIsFeature((prev) =>
                prev.includes("LowCarb")
                  ? prev.filter((item) => item !== "LowCarb")
                  : [...prev, "LowCarb"],
              )
            }
            className={`${isFeature.includes("LowCarb") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Low carb <LuWheat />
          </button>
          <button
            onClick={() =>
              setIsFeature((prev) =>
                prev.includes("GlutenFree")
                  ? prev.filter((item) => item !== "GlutenFree")
                  : [...prev, "GlutenFree"],
              )
            }
            className={`${isFeature.includes("GlutenFree") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Gluten Free <LuWheatOff />
          </button>
          <button
            onClick={() =>
              setIsFeature((prev) =>
                prev.includes("LactoseFree")
                  ? prev.filter((item) => item !== "LactoseFree")
                  : [...prev, "LactoseFree"],
              )
            }
            className={`${isFeature.includes("LactoseFree") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Lactose Free <LuMilkOff />
          </button>
          <button
            onClick={() =>
              setIsFeature((prev) =>
                prev.includes("LowFat")
                  ? prev.filter((item) => item !== "LowFat")
                  : [...prev, "LowFat"],
              )
            }
            className={`${isFeature.includes("LowFat") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Low Fat <FaTintSlash />
          </button>
          <button
            onClick={() =>
              setIsFeature((prev) =>
                prev.includes("BestSeller")
                  ? prev.filter((item) => item !== "BestSeller")
                  : [...prev, "BestSeller"],
              )
            }
            className={`${isFeature.includes("Bestseller") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Bestseller <BestSellerIcon />
          </button>
          <button
            onClick={() =>
              setIsFeature((prev) =>
                prev.includes("keto")
                  ? prev.filter((item) => item !== "keto")
                  : [...prev, "keto"],
              )
            }
            className={`${isFeature.includes("keto") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            keto <GiAvocado />
          </button>
        </div>
      </div>

      <div className="flex justify-between space-x-4 border-t pt-4">
        <button
          onClick={() => setIsFeature("")}
          className="flex-1 cursor-pointer rounded-xl border py-2"
        >
          Clear
        </button>
        <button
          onClick={() => dispatch(closeFilterModal())}
          className="flex-1 cursor-pointer rounded-xl bg-black py-2 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FilterPopup;
