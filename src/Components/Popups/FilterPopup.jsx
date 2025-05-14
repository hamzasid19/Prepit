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
import { productFeature } from "../../slices/productSlice/productFeatureSlice";

const FilterPopup = ({ isFeature, setIsFeature }) => {
  const dispatch = useDispatch();
  const { openFilter } = useSelector((store) => store.filterModal);
  const { setFeature } = useSelector((store) => store.feature);

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
          onClick={() => dispatch(productFeature("MuscleBuilding"))}
          className={`${setFeature.includes("MuscleBuilding") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
        >
          Muscle Building <LuBicepsFlexed />
        </button>
        <button
          onClick={() => dispatch(productFeature("Slimming"))}
          className={`${setFeature.includes("Slimming") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
        >
          Slimming <PiSpeedometerLight />
        </button>
        <button
          onClick={() => dispatch(productFeature("Bulking"))}
          className={`${setFeature.includes("Bulking") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
        >
          Bulking <TbHeartCheck />
        </button>
      </div>

      <div>
        <h2 className="mb-6 text-xl font-bold sm:text-4xl">Protein source</h2>
        <div className="space-y-2">
          <button
            onClick={() => dispatch(productFeature("Chicken"))}
            className={`${setFeature.includes("Chicken") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Chicken <GiChickenOven />
          </button>
          <button
            onClick={() => dispatch(productFeature("Beef"))}
            className={`${setFeature.includes("Beef") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Beef <LuBeef />
          </button>
          <button
            onClick={() => dispatch(productFeature("Salmon"))}
            className={`${setFeature.includes("Salmon") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Salmon <GiSalmon />
          </button>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-xl font-bold sm:text-4xl">Preferences</h2>
        <div className="space-y-2">
          <button
            onClick={() => dispatch(productFeature("Snacks"))}
            className={`${setFeature.includes("Snacks") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Snacks <FaPlateWheat />
          </button>
          <button
            onClick={() => dispatch(productFeature("LowCarb"))}
            className={`${setFeature.includes("LowCarb") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Low carb <LuWheat />
          </button>
          <button
            onClick={() => dispatch(productFeature("GlutenFree"))}
            className={`${setFeature.includes("GlutenFree") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Gluten Free <LuWheatOff />
          </button>
          <button
            onClick={() => dispatch(productFeature("LactoseFree"))}
            className={`${setFeature.includes("LactoseFree") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Lactose Free <LuMilkOff />
          </button>
          <button
            onClick={() => dispatch(productFeature("LowFat"))}
            className={`${setFeature.includes("LowFat") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Low Fat <FaTintSlash />
          </button>
          <button
            onClick={() => dispatch(productFeature("BestSeller"))}
            className={`${setFeature.includes("BestSeller") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
          >
            Bestseller <BestSellerIcon style={{ isFeature }} />
          </button>
          <button
            onClick={() => dispatch(productFeature("keto"))}
            className={`${setFeature.includes("keto") ? "bg-black text-white" : "bg-white text-black"} flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left`}
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
