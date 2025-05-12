import Container from "../Components/Container";
import Button from "../Components/Button";
import CartItem from "../Components/CartItem";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const { cartItems, itemsPrice } = useSelector((store) => store.cart);
  return (
    <section className="bg-white py-10">
      <Container>
        <h1 className="pb-6 text-5xl font-semibold text-black">Add To Cart</h1>
        <div className="grid-rows-auto grid">
          <div className="mb-5 grid grid-cols-[1fr_.5fr_.2fr] bg-black p-4 md:grid-cols-[1fr_.8fr_.2fr]">
            <h1 className="text-lg font-semibold text-white">Products</h1>
            <h1 className="text-lg font-semibold text-white">Quantity</h1>
            <h1 className="text-lg font-semibold text-white">Price</h1>
          </div>

          {cartItems.map((item) => {
            return (
              <div className="space-y-2">
                <CartItem {...item} />
              </div>
            );
          })}

          <div className="space-y-4 border-t border-b border-gray-300 py-2">
            <div className="grid grid-cols-[1fr_.8fr_.2fr]">
              <p className="text-xl font-bold text-black">Total:</p>
              <div></div>
              <p className="text-xl text-black">${itemsPrice}</p>
            </div>
            <div className="grid grid-cols-[1fr_.8fr_.2fr]">
              <p className="text-xl font-bold text-black">Discount:</p>
              <div></div>
              <p className="text-xl text-black">0%</p>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_.8fr_.2fr] py-4">
            <p className="text-xl font-bold text-black">Sub Total:</p>
            <div></div>
            <p className="text-xl text-black">${itemsPrice}</p>
          </div>

          <Button
            variant="secondary"
            text="Buy Now"
            bgVariant={"black"}
            extraClasses={"py-3"}
          />
        </div>
      </Container>
    </section>
  );
};

export default AddToCart;
