import React from "react";
import aboutbg from "../assets/about/aboutbg.png";
import aboutmain from "../assets/about/aboutmain.png";
import Container from "../Components/Container";
import Button from "../Components/Button";
import Input from "../Components/Input";
const About = () => {
  return (
    <section className="bg-white">
      <div
        style={{ backgroundImage: `url(${aboutbg})` }}
        className="flex h-[400px] items-center justify-center bg-cover bg-center text-6xl font-bold text-white"
      >
        About
      </div>
      <Container>
        <div className="grid-rows-auto grid gap-4 py-10 lg:grid-cols-2">
          <div className="order-2 space-y-4 text-center sm:text-left lg:order-1">
            <h1 className="text-4xl/relaxed font-bold text-black">About Us</h1>
            <p className="font-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="font-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="font-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <img
            className="order-1 h-full w-full lg:order-2"
            src={aboutmain}
            alt=""
          />
        </div>

        <div className="grid w-full gap-12 py-10 md:grid-cols-[350px_1fr] md:place-items-center lg:grid-cols-[400px_1fr]">
          <div className="flex h-full w-full flex-col items-center justify-between space-y-16 rounded-3xl bg-black p-6 text-center text-white md:items-start md:text-left">
            <div className="space-y-2">
              <svg
                className="mx-auto md:mx-0"
                width="60px"
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="-14.72 -14.72 93.44 93.44"
                enable-background="new 0 0 64 64"
                xml:space="preserve"
                fill="#000000"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  stroke-width="0"
                  transform="translate(0,0), scale(1)"
                >
                  <rect
                    x="-14.72"
                    y="-14.72"
                    width="93.44"
                    height="93.44"
                    rx="46.72"
                    fill="#ffffff"
                    strokewidth="0"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.256"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="#000000"
                    d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                  ></path>{" "}
                </g>
              </svg>
              <h1 className="text-2xl font-bold">Address:</h1>
              <p className="text-xl">Am Meerkamp 26 40667 Meerbusch</p>
            </div>

            <div className="space-y-2">
              <svg
                className="mx-auto md:mx-0"
                width="60px"
                viewBox="-7.44 -7.44 38.88 38.88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0">
                  <rect
                    x="-7.44"
                    y="-7.44"
                    width="38.88"
                    height="38.88"
                    rx="19.44"
                    fill="#ffffff"
                    strokewidth="0"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
              <h1 className="text-2xl font-bold">Telephone:</h1>
              <p className="text-xl">+49 (0) 2132 – 937 55-0</p>
            </div>

            <div className="space-y-2">
              <svg
                className="mx-auto md:mx-0"
                width="60px"
                viewBox="-7.2 -7.2 38.40 38.40"
                xmlns="http://www.w3.org/2000/svg"
                id="mail"
                class="icon glyph"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0">
                  <rect
                    x="-7.2"
                    y="-7.2"
                    width="38.40"
                    height="38.40"
                    rx="19.2"
                    fill="#ffffff"
                    strokewidth="0"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M22,8.32V18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V8.69L4,9.78l7.52,4.1A1,1,0,0,0,12,14a1,1,0,0,0,.5-.14L20,9.49Z"
                    // style="fill:#000000"
                  ></path>
                  <path
                    d="M22,6h0L20,7.18l-8,4.67L4,7.5,2,6.4V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6Z"
                    // style="fill:#000000"
                  ></path>
                </g>
              </svg>
              <h1 className="text-2xl font-bold">E-Mail:</h1>
              <p className="text-xl">post@witte-tax.de</p>
            </div>
          </div>
          <form className="w-full grow-1">
            <h1 className="pb-4 text-center text-5xl font-semibold text-black md:text-left">
              Get In Touch
            </h1>
            <div className="md:grid-rows-auto grid gap-3 md:grid-cols-1 lg:grid-cols-2">
              <div>
                <p htmlFor="" className="text-base font-semibold text-black">
                  First Name
                </p>
                <Input
                  type="text"
                  placeholder="First Name"
                  borderVariant="gray"
                  extraClasses="p-2"
                />
              </div>
              <div>
                <p htmlFor="" className="text-base font-semibold text-black">
                  Last Name
                </p>
                <Input
                  type="text"
                  placeholder="Last Name"
                  borderVariant="gray"
                  extraClasses="p-2"
                />
              </div>

              <div>
                <p htmlFor="" className="text-base font-semibold text-black">
                  E-Mail
                </p>
                <Input
                  type="email"
                  placeholder="Email"
                  borderVariant="gray"
                  extraClasses="p-2"
                />
              </div>

              <div>
                <p htmlFor="" className="text-base font-semibold text-black">
                  Phone Number
                </p>
                <Input
                  type="text"
                  placeholder="Number"
                  borderVariant="gray"
                  extraClasses="p-2"
                />
              </div>

              <p className="text-base font-semibold text-black" htmlFor="">
                Message
              </p>
              <textarea
                name=""
                id=""
                className="col-start-1 col-end-[-1] h-40 w-full rounded-xl border border-gray-400 p-2 text-black"
              ></textarea>
              <Button
                variant="secondary"
                bgVariant={"black"}
                text={"Submit"}
                extraClasses="px-4 py-2 lg:w-1/2 md:w-full w-40 mx-auto md:mx-0"
              />
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default About;
