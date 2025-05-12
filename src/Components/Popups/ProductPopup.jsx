import { CgCloseO } from "react-icons/cg";

export const ProductPopup = ({
  image,
  name,
  price,
  description,
  ingredients,
  prepare,
  nutritionInfo,
  weight,
  isOpen,
  id,
  handleClose,
}) => {
  return (
    <div
      key={id}
      className={`absolute top-0 right-[5%] z-19 w-[90%] bg-white p-4 text-black shadow-xl transition-all duration-500 sm:px-12 sm:py-14 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-xl font-bold md:text-4xl">
          {name} ({weight}g)
        </h1>
        <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
          <CgCloseO onClick={handleClose} className="h-12 w-12" />
        </button>
      </div>
      <img src={image} className="mt-4 mb-8 w-full" alt="" />
      <div className="w-full space-y-4 lg:w-1/2">
        <h1 className="text-xl font-bold md:text-4xl">
          {name} ({weight}g)
          <span className="font-normal">
            with various vegetables (2 portions)
          </span>
        </h1>
        <p className="text-base font-light text-gray-400">{description}</p>

        <h1 className="text-base font-bold md:text-2xl">
          Price:
          <span className="font-normal">
            from ${price} per portion - 2 portions
          </span>
        </h1>

        <h1 className="text-base font-bold md:text-2xl">
          NetWeight:
          <span className="font-normal">{weight}g</span>
        </h1>

        <h1 className="text-base font-bold md:text-2xl">
          Preparation:
          <span className="font-normal">{prepare}</span>
        </h1>

        <h1 className="text-base font-bold md:text-2xl">Ingredients:</h1>

        <p className="pb-3 text-base font-normal md:text-2xl">{ingredients}</p>

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
                Energy
              </td>
              <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                {nutritionInfo[0].energy} kcal
              </td>
              <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                {nutritionInfo[0].energy * (weight / 100)} kcal
              </td>
            </tr>

            <tr>
              <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                Protein
              </td>
              <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                {nutritionInfo[0].protein} g
              </td>
              <td className="border p-1 text-sm sm:px-3 sm:py-2 sm:text-base">
                {nutritionInfo[0].protein * (weight / 100)} g
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPopup;
