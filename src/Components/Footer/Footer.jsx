import Container from "../Container";
import logo from "../../assets/logo.png";
import footer from "../../assets/footer.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${footer})` }}
      className="bg-cover bg-center"
    >
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 border-b border-[#585858] pt-20 pr-0 pb-5 text-base lg:flex-row lg:gap-0 lg:pr-20">
          <div className="w-full space-y-3 text-center lg:w-1/3 lg:text-left">
            <img src={logo} className="mx-auto lg:mx-0" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore .Learn more
            </p>
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="font-bold">Quick Links</h1>
            <ul className="space-y-4">
              <NavLink className="block" to={"/"}>
                Home
              </NavLink>
              <NavLink className="block" to={"/about"}>
                About
              </NavLink>
              <NavLink className="block" to={"/menu"}>
                Menu
              </NavLink>
            </ul>
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="font-bold">FOLLOW US</h1>
            <ul className="flex items-center gap-4">
              <li className="norder-white cursor-pointer rounded-full border p-1">
                <FaFacebook />
              </li>
              <li className="norder-white cursor-pointer rounded-full border p-1">
                <FaInstagram />
              </li>
              <li className="norder-white cursor-pointer rounded-full border p-1">
                <FaXTwitter />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-5 pb-5 text-center lg:flex-row lg:text-left">
          <p>&copy; 2025 Prepit Healthy Prepared Meal. All Right Reserved.</p>
          <ul className="flex gap-4">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
