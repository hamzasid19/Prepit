import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { productFeature } from "../../slices/productSlice/productFeatureSlice";
import { useGetProductsQuery } from "../../slices/productSlice/productSlice";

const HomeMenuCard = ({ data }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleNavigate = () => {
    if (data.id === 1) {
      dispatch(productFeature("Slimming"));
    }
    if (data.id === 2) {
      dispatch(productFeature("MuscleBuilding"));
    }
    if (data.id === 3) {
      dispatch(productFeature("MuscleBuilding"));
    }
    if (data.id === 4) {
      dispatch(productFeature("keto"));
    }
    navigate("/menu");
  };

  return (
    <div
      onClick={handleNavigate}
      key={data.id}
      className="w-full cursor-pointer overflow-hidden rounded-2xl bg-white text-center text-black sm:w-1/2 md:w-1/3 lg:w-auto"
    >
      <img className="w-full" src={data.img} alt="" />
      <h1 className="py-4 text-2xl font-semibold">{data.title}</h1>
    </div>
  );
};

export default HomeMenuCard;
