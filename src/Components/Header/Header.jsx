import { useState } from "react";
import Container from "../Container";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import headerbg from "../../assets/headerbg.png";
import { LuBicepsFlexed } from "react-icons/lu";
import { FaRegSnowflake, FaRegUser } from "react-icons/fa6";
import { CiMemoPad } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useSelector((store) => store.cart);
  const handleOpen = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div
      style={{ backgroundImage: `url(${headerbg})` }}
      className="relative z-13 h-44 overflow-hidden bg-cover bg-center"
    >
      <header className="absolute top-0 z-13 w-full bg-transparent py-4 text-sm">
        <Container>
          <ul className="flex flex-col flex-wrap items-center justify-center gap-1.5 border-b border-[#585858] py-2.5 text-center min-[696px]:py-6 sm:flex-row sm:text-left md:flex-nowrap md:justify-between">
            <li className="flex items-center gap-2">
              <LuBicepsFlexed />
              100% Natural & High Protein
            </li>
            <li className="flex items-center gap-2">
              <FaRegSnowflake />
              Refrigerated delievery on the day you want
            </li>
            <li className="flex items-center gap-2">
              <CiMemoPad />
              Dietitian Designed
            </li>
          </ul>
          <div className="flex items-center justify-between py-2">
            <NavLink to="/">
              <img
                className="w-24 cursor-pointer sm:w-auto"
                src={logo}
                alt=""
              />
            </NavLink>
            <p
              onClick={handleOpen}
              className="block cursor-pointer text-3xl md:hidden"
            >
              &#8801;{" "}
            </p>
            <ul
              className={`fixed flex flex-col transition-all duration-500 md:static md:block md:max-h-max md:space-x-4 md:bg-transparent md:text-white ${isOpen ? "max-h-40" : "max-h-0 overflow-hidden"} top-40 right-5 bg-white text-black sm:top-34`}
            >
              <NavLink
                className={({ isActive }) =>
                  `px-6 py-2.5 text-2xl hover:bg-gray-200 md:p-0 md:text-base md:hover:bg-transparent ${
                    isActive ? "text-orange-400" : "text-white"
                  }`
                }
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `px-6 py-2.5 text-2xl hover:bg-gray-200 md:p-0 md:text-base md:hover:bg-transparent ${
                    isActive ? "text-orange-400" : "text-white"
                  }`
                }
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `px-6 py-2.5 text-2xl hover:bg-gray-200 md:p-0 md:text-base md:hover:bg-transparent ${
                    isActive ? "text-orange-400" : "text-white"
                  }`
                }
                to="/menu"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </NavLink>
            </ul>
            <div className="hidden gap-3 md:flex">
              <NavLink to="/cart" className="relative">
                <HiOutlineShoppingBag />
                {cartItems.length > 0 && (
                  <div className="text-semibold absolute bottom-3 left-2 rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  </div>
                )}
              </NavLink>
              <NavLink to="/register">
                <FaRegUser />
              </NavLink>
            </div>
          </div>
        </Container>
      </header>
      <div className="absolute top-0 z-12 h-48 w-full bg-white/10 blur-xs">
        {" "}
      </div>
    </div>
  );
};

export default Header;
