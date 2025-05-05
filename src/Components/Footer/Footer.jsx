import React from "react";
import Container from "../Container";
import logo from "../../assets/logo.png";
import footer from "../../assets/footer.png";
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
              <li>Menu Dropdown</li>
              <li>Info Drodown</li>
              <li>info</li>
            </ul>
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="font-bold">FOLLOW US</h1>
            <ul className="flex items-center gap-4">
              <li className="norder-white cursor-pointer rounded-full border p-1">
                <svg
                  width="20px"
                  height="19px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  class="bi bi-facebook"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>{" "}
                  </g>
                </svg>
              </li>
              <li className="norder-white cursor-pointer rounded-full border p-1">
                <svg
                  width="20px"
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <rect
                      x="15.5"
                      y="9"
                      width="2"
                      height="2"
                      rx="1"
                      transform="rotate(-90 15.5 9)"
                      fill="#ffffff"
                    ></rect>{" "}
                    <rect
                      x="16"
                      y="8.5"
                      width="1"
                      height="1"
                      rx="0.5"
                      transform="rotate(-90 16 8.5)"
                      stroke="#ffffff"
                      stroke-linecap="round"
                    ></rect>{" "}
                  </g>
                </svg>
              </li>
              <li className="norder-white cursor-pointer rounded-full border p-1">
                <svg
                  width="20px"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 512 462.799"
                >
                  <path
                    fill-rule="nonzero"
                    d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                  />
                </svg>
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
