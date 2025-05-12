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
const FilterPopup = () => {
  const dispatch = useDispatch();
  const { openFilter } = useSelector((state) => state.filterModal);
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
        <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
          Muscle Building <LuBicepsFlexed />
        </button>
        <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
          Skimming <PiSpeedometerLight />
        </button>
        <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
          Bulking <TbHeartCheck />
        </button>
      </div>

      <div>
        <h2 className="mb-6 text-xl font-bold sm:text-4xl">Protein source</h2>
        <div className="space-y-2">
          <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
            Chicken <GiChickenOven />
          </button>
          <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
            Beef <LuBeef />
          </button>
          <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
            Salmon <GiSalmon />
          </button>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-xl font-bold sm:text-4xl">Preferences</h2>
        <div className="space-y-2">
          <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
            Snacks <FaPlateWheat />
          </button>
          <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
            Low carb <LuWheat />
          </button>
          <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
            Gluten Free <LuWheatOff />
          </button>
          <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
            Lactose Free <LuMilkOff />
          </button>
          <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
            Low Fat <FaTintSlash />
          </button>
          <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
            Bestseller <BestSellerIcon />
          </button>
          <button className="flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-4 py-2 text-left">
            keto <GiAvocado />
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
  );
};

export default FilterPopup;
