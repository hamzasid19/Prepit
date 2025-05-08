import React from "react";
import Container from "../Components/Container";
import logo from "../assets/logo.png";
import loginImg from "../assets/login.png";
import Button from "../Components/Button";
import { NavLink } from "react-router";
import Input from "../Components/Input";

const Register = () => {
  return (
    <Container extraClasses={"py-10"}>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <section className="grid grid-cols-1 place-items-center gap-2 pt-20 lg:grid-cols-2">
        <form className="order-2 flex flex-col gap-4 space-y-2 px-8 lg:order-1 lg:px-0">
          <h1 className="text-center text-4xl font-semibold text-white lg:text-6xl">
            Create Your Account
          </h1>
          <p className="text-center text-sm text-gray-500 lg:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            tenetur odit illo numquam voluptas facilis asperiores aut veritatis
            maxime porro, unde, enim rerum incidunt, saepe atque tempore! Ipsum,
            quia? Vitae!
          </p>
          <div>
            <p className="pb-3 text-xl">First Name</p>
            <Input
              type="text"
              placeholder="First Name"
              borderVariant="black"
              extraClasses="p-4 "
            />
          </div>

          <div>
            <p className="pb-3 text-xl">Last Name</p>
            <Input
              type="text"
              placeholder="Last Name"
              borderVariant="black"
              extraClasses="p-4 "
            />
          </div>

          <div>
            <p className="pb-3 text-xl">Email</p>
            <Input
              type="email"
              placeholder="Email"
              borderVariant="black"
              extraClasses="p-4"
            />
          </div>

          <div>
            <p className="pb-3 text-xl">Password</p>
            <Input
              type="password"
              placeholder="Password"
              borderVariant="black"
              extraClasses="p-4"
            />
          </div>
          <Button
            text="Register"
            variant="secondary"
            bgVariant={"white"}
            extraClasses={"py-2"}
          />
        </form>
        <img className="order-1 lg:order-2" src={loginImg} alt="" />
      </section>
    </Container>
  );
};

export default Register;
