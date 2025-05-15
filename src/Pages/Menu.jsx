import { useDispatch, useSelector } from "react-redux";
import Container from "../Components/Container";
import MenuMealData from "../data/MenuMealData";
import MenuMeal from "../Components/MenuMeal";
import MenuCard from "../Components/Cards/MenuCard";
import AccordionData from "../data/AccordionData";
import Accordiion from "../Components/Accordiion";
import { SettingIcon } from "../Components/Icons";
import { useGetProductsQuery } from "../slices/productSlice/productSlice";
import FilterPopup from "../Components/Popups/FilterPopup";
import { openFilterModal } from "../slices/modalSlice/filterModalSlice";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import Button from "../Components/Button";
import { useEffect, useState } from "react";

const Menu = () => {
  const feature = useSelector((store) => store.feature.setFeature);
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetProductsQuery({ feature, page });
  const products = data?.products;
  const totalProducts = data?.total;
  const totalPages = data?.pages;
  const dispatch = useDispatch();
  const { openProductId } = useSelector((store) => store.modal);
  const { openFilter } = useSelector((store) => store.filterModal);
  const { cartItems } = useSelector((store) => store.cart);
  const { setMealQty } = useSelector((store) => store.mealQty);

  const cartItemsLength = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const bar = (value) => {
    if (cartItemsLength === 0) return "w-0";

    if (value === 4) {
      switch (cartItemsLength) {
        case 1:
          return "w-1/4";
        case 2:
          return "w-1/2";
        case 3:
          return "w-3/4";
        case 4:
          return "w-full";
      }
    }

    if (value === 6) {
      switch (cartItemsLength) {
        case 1:
          return "w-1/6";
        case 2:
          return "w-1/3";
        case 3:
          return "w-1/2";
        case 4:
          return "w-2/3";
        case 5:
          return "w-5/6";
        case 6:
          return "w-full";
      }
    }

    if (value === 8) {
      switch (cartItemsLength) {
        case 1:
          return "w-1/6";
        case 2:
          return "w-1/4";
        case 3:
          return "w-1/3";
        case 4:
          return "w-2/5";
        case 5:
          return "w-1/2";
        case 6:
          return "w-3/5";
        case 7:
          return "w-5/6";
        case 8:
          return "w-full";
      }
    }

    return "w-0";
  };
  useEffect(() => {
    window.scrollTo(0, 200);
  }, [page]);
  return (
    <section className="bg-white">
      <Container extraClasses=" py-10 relative">
        <div className="flex flex-wrap items-center justify-between gap-8 sm:flex-nowrap">
          {MenuMealData.map((item) => (
            <MenuMeal data={item} meal={setMealQty} />
          ))}
        </div>

        <div className="my-6 flex w-full flex-col gap-4 rounded-2xl bg-black px-2 py-4 sm:px-6">
          <div
            onClick={() => dispatch(openFilterModal())}
            className="mx-auto flex w-max cursor-pointer items-center gap-4 rounded-4xl border border-white px-2 py-2 text-white sm:mx-0 sm:px-6"
          >
            <SettingIcon />
            <p>Sports Goal & Preferences</p>
          </div>
          <div className="flex flex-col items-center gap-4 py-1 sm:flex-row">
            <div className="h-10 w-full grow-1 rounded-4xl border border-white sm:w-auto">
              <div
                className={`h-full ${bar(setMealQty)} rounded-4xl bg-white transition-all duration-300`}
              ></div>
            </div>
            <div className="rounded-4xl bg-white px-5 py-2.5 text-black">
              {cartItems.reduce((acc, item) => acc + item.qty, 0)}/
              {setMealQty === 4 ? "4" : setMealQty === 6 ? "6" : "8"} Meals
            </div>
          </div>
        </div>

        <FilterPopup />

        <div className="grid gap-4 sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
          {products?.map((item) => (
            <MenuCard key={item._id} {...item} />
          ))}
        </div>
        {totalProducts > 9 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <Button
              disableValue={page === 1}
              handleClick={() => {
                setPage((x) => x - 1);
              }}
              extraClasses={"cursor-pointer text-black"}
            >
              <CgChevronLeft />
            </Button>
            <p className="text-black">{page}</p>
            <Button
              disableValue={totalPages === page}
              handleClick={() => {
                setPage((x) => x + 1);
              }}
              extraClasses={"cursor-pointer text-black"}
            >
              <CgChevronRight />
            </Button>
          </div>
        )}

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
          className={`fixed inset-0 z-18 bg-white/50 ${openProductId || openFilter ? "block" : "hidden"}`}
        ></div>
      </Container>
    </section>
  );
};

export default Menu;
