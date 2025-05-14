import Button from "../Button";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { changeMealQty } from "../../slices/mealSlice/mealSlice";
const HomeChooseCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    if (data.id === 1) {
      dispatch(changeMealQty(4));
    }
    if (data.id === 2) {
      dispatch(changeMealQty(6));
    }
    if (data.id === 3) {
      dispatch(changeMealQty(8));
    }
    navigate("/menu");
  };
  return (
    <div id={data.id} className={`grid-rows-auto relative grid`}>
      <div className="h-[140px]"></div>
      <img
        className="absolute left-9 row-start-1 row-end-2 max-[370px]:w-[80%]"
        src={data.img}
        alt=""
      />
      <div
        className={`grid h-[430px] max-w-[350px] grid-rows-[1fr_50px_50px_50px] gap-5 rounded-tl-[60px] rounded-tr-xl rounded-br-[60px] rounded-bl-xl border border-white p-6 max-[370px]:h-[370px] ${data.id !== "1" ? "bg-white/10" : ""}`}
      >
        <h1 className="self-end text-2xl font-bold">{data.title}</h1>
        <p className="self-start text-xl">{data.description}</p>
        <Button
          handleClick={handleClick}
          text={data.btnText}
          variant="secondary"
          bgVariant="white"
          extraClasses="w-1/2 mx-auto py-2"
        />
      </div>
    </div>
  );
};

export default HomeChooseCard;
