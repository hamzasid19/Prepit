import React from "react";
import homebg from "../assets/homebg.png";
import homemain from "../assets/homemain.png";
import Button from "../Components/Button";
import Container from "../Components/Container";
import data from "../data/FactorData";
import FactorCard from "../Components/Cards/FactorCard";
import homemenubg from "../assets/homemenu/homemenubg.png";
import HomeMenuCard from "../Components/Cards/HomeMenuCard";
import menuData from "../data/HomeMenuData";
import chooseData from "../data/HomeCHooseData";
import homechoosebg from "../assets/homechoose/homechoosebg.png";
import HomeChooseCard from "../Components/Cards/HomeChooseCard";
import NutritionCard from "../Components/Cards/NutrtionCard";
import nutritionData from "../data/NutritionData";
import nutritionbg from "../assets/homenutrition/nutritionbg.png";
const Home = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${homebg})` }}
        className="bg-cover bg-center"
      >
        <Container extraClasses="flex flex-col-reverse items-center justify-between lg:flex-row py-10 text-center lg:text-left">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold sm:text-6xl/snug">
              Eat Smart & Fuel Your Wellness Goals
            </h1>
            <p className="py-8 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation laboris nisi ut
              aliquip.
            </p>
            <Button
              variant="primary"
              text="Order Now"
              extraClasses="py-3 px-6 text-xl"
            />
          </div>
          <img src={homemain} alt="" className="lg:w-1/2" />
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <div className="text-center text-black">
            <h1 className="inline rounded-4xl bg-black px-4 py-1 text-white">
              Factor Simplified
            </h1>
            <h1 className="p-6 text-4xl font-medium sm:text-6xl">
              Here’s How Factor Works
            </h1>
          </div>
          <div className="flex flex-col items-center justify-between text-center lg:flex-row lg:items-start">
            {data.map((item) => (
              <FactorCard data={item} />
            ))}
          </div>
        </Container>
      </section>
      <section
        style={{ backgroundImage: `url(${homemenubg})` }}
        className="bg-cover bg-center py-8 lg:py-40"
      >
        <Container>
          <div className="text-center text-black">
            <h1 className="inline rounded-4xl bg-black px-4 py-1 text-white">
              Our Menu
            </h1>
            <h1 className="pt-5 pb-12 text-4xl font-medium sm:text-6xl">
              Explore Our Menu
            </h1>
          </div>

          <div className="flex flex-col items-center justify-between gap-2.5 text-center lg:flex-row lg:items-start">
            {menuData.map((item) => (
              <HomeMenuCard data={item} />
            ))}
          </div>
        </Container>
      </section>
      <section
        style={{ backgroundImage: `url(${homechoosebg})` }}
        className="bg-cover bg-center py-20"
      >
        <Container extraClasses="grid text-center gap-20">
          <div>
            <h1 className="text-4xl/loose font-medium sm:text-6xl/loose">
              Choose Your Box Size
            </h1>
            <p className="mx-auto w-full text-gray-400 sm:w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt{" "}
            </p>
          </div>
          <div className="grid-cols-auto grid place-items-center gap-2 text-center sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] lg:flex-row">
            {chooseData.map((item) => (
              <HomeChooseCard data={item} />
            ))}
          </div>
        </Container>
      </section>
      <section
        style={{ backgroundImage: `url(${nutritionbg})` }}
        className="bg-cover bg-center py-20"
      >
        <Container>
          <div className="text-center text-black">
            <h1 className="inline rounded-4xl bg-black px-4 py-1 text-white">
              Nutrition
            </h1>
            <h1 className="p-6 text-4xl font-medium sm:text-6xl">
              Fresh Nutrition Satisficing
            </h1>
          </div>
          <div className="flex flex-col items-center justify-between text-center lg:flex-row lg:items-start">
            {nutritionData.map((item) => (
              <NutritionCard data={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
