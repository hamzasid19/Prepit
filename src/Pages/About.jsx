import React from "react";
import aboutbg from "../assets/about/aboutbg.png";
import aboutmain from "../assets/about/aboutmain.png";
import Container from "../Components/Container";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
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
          <div className="about-aside flex h-full w-full flex-col items-center justify-between space-y-16 rounded-3xl bg-black p-6 text-center text-white md:items-start md:text-left">
            <div className="space-y-2">
              <FaLocationDot className="mx-auto md:mx-0" />
              <h1 className="text-2xl font-bold">Address:</h1>
              <p className="text-xl">Am Meerkamp 26 40667 Meerbusch</p>
            </div>

            <div className="space-y-2">
              <FaPhone className="mx-auto md:mx-0" />
              <h1 className="text-2xl font-bold">Telephone:</h1>
              <p className="text-xl">+49 (0) 2132 – 937 55-0</p>
            </div>

            <div className="space-y-2">
              {/* className="mx-auto md:mx-0" */}
              <HiMail className="mx-auto md:mx-0" />
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
