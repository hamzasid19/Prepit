import { useState } from "react";
import {
  closeProductModal,
  openProductModal,
} from "../../slices/modalSlice/productModalSlice";
import Button from "../Button";
import ProductPopup from "../Popups/ProductPopup";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../slices/productSlice/productSlice";
import { addToCart } from "../../slices/cartSlice/carSlice";
const MenuCard = ({
  _id,
  image,
  name,
  price,
  description,
  countInStock,
  ingredients,
  prepare,
  nutritionInfo,
  weight,
}) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const handleOpen = (id) => dispatch(openProductModal(id));
  const { openProductId } = useSelector((store) => store.modal);

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        _id,
        name,
        image,
        price,
        countInStock,
        qty,
        description,
      }),
    );
  };
  return (
    <>
      <div key={_id} className="relative grid grid-rows-[1fr_auto_auto]">
        <img
          className="w-full cursor-pointer"
          onClick={() => handleOpen(_id)}
          src={image}
          alt={name}
        />
        <p className="absolute top-4 left-0 rounded-tr-4xl rounded-br-4xl bg-black p-2 pr-4">
          ${price}
        </p>
        <p className="absolute top-16 left-0 rounded-tr-4xl rounded-br-4xl bg-black p-2 pr-4">
          premium
        </p>
        <div className="grid grid-cols-4 gap-6 pt-4 text-center">
          <div className="bg-gray-300/70 py-2 text-black">
            <h1 className="font-bold">Kcal</h1>
            <p className="font-semibold">{nutritionInfo[0].energy}</p>
          </div>
          <div className="bg-gray-300/70 py-2 text-black">
            <h1 className="font-bold">Protein</h1>
            <p className="font-semibold">{nutritionInfo[0].protein}</p>
          </div>
          <div className="bg-gray-300/70 py-2 text-black">
            <h1 className="font-bold">Carbs</h1>
            <p className="font-semibold">{nutritionInfo[0].carbs}</p>
          </div>
          <div className="bg-gray-300/70 py-2 text-black">
            <h1 className="font-bold">Fat</h1>
            <p className="font-semibold">{nutritionInfo[0].fat}</p>
          </div>
        </div>
        <div>
          <h1 className="pb-2 text-2xl/loose font-semibold text-black">
            {name} ({weight}g)
          </h1>
          <Button
            countInStock={countInStock}
            variant="secondary"
            bgVariant="black"
            text={"Add"}
            extraClasses="w-full py-2 text-center rounded-xl"
            handleClick={addToCartHandler}
          />
        </div>
      </div>
      {openProductId === _id && (
        <ProductPopup
          image={image}
          name={name}
          price={price}
          description={description}
          ingredients={ingredients}
          prepare={prepare}
          nutritionInfo={nutritionInfo}
          weight={weight}
          isOpen={openProductId === _id}
          handleClose={() => dispatch(closeProductModal())}
        />
      )}
    </>
  );
};

export default MenuCard;
