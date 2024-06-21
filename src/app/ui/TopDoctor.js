"use client";
import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import PromotionCard from "../components/promotion/PromotionCard";
import Glide from "@glidejs/glide";
import ProductCard from "../components/product/ProductCard";
import PartnerSlider from "../components/PartnerSlider";
import Carousel from "../components/Carousel";
import Searchbar from "../components/Searchbar";
import { data } from "../components/promotion/promotionData";
import { productData } from "../components/product/productData";
import { doctorCard } from "../components/doctors/doctorCardData";

const TopDoctor = () => {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <Carousel />
      <div className="mt-12">
        <h1 className="text-red-700 text-center font-bold text-3xl mb-8">
          Find Doctors, Book Tests & Order Medicines
        </h1>

        <Searchbar
          options={["Karachi", "Lahore", "Islamabad"]}
          searchingFor={["Doctor", "Lab", "Pharmacy"]}
          showSecDropdown={true}
          placeholder={"Search Doctor medicine or lab test"}
        />
      </div>
      <div className="px-6 md:px-12 bg-gray-50 py-4">
        <h2 className="text-2xl font-bold text-[#c30404] mb-4 mt-7">
          Shifaam Top Doctors
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Doctor Card */}
          {doctorCard.map((card, index) => {
            const { name, specialist, about, rating, location, url } = card;
            return (
              <DoctorCard
                key={index}
                name={name}
                specialist={specialist}
                about={about}
                rating={rating}
                location={location}
                url={url}
              />
            );
          })}
        </div>
        <h2 className="text-2xl font-bold text-[#c30404] mb-4 mt-10">
          Promotions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-center">
          {/* Promotion */}
          {data.map((card) => (
            <PromotionCard key={card.title} src={card.src} title={card.title} />
          ))}
        </div>
        <div className="bg-white rounded-xl px-12 py-8 mt-12 relative">
          <h2 className="text-2xl font-bold text-[#c30404] mb-4">
            Best Selling Products
          </h2>

          {/*<!-- Component: Carousel with indicators & controls inside --> */}
          <div className="glide-03  w-full">
            {/*    <!-- Slides --> */}
            <div className="overflow-hidden" data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                {productData.map((card) => (
                  <ProductCard
                    key={card.name}
                    img={card.img}
                    price={card.price}
                    name={card.name}
                  />
                ))}
              </ul>
            </div>
            {/*    <!-- Controls --> */}
            <div
              className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between"
              data-glide-el="controls"
            >
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-tr-xl rounded-br-xl  bg-[#c30404] bg-opacity-50 text-white hover:bg-opacity-100 transition duration-300  focus-visible:outline-none lg:h-20 lg:w-8"
                data-glide-dir="<"
                aria-label="prev slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <title>prev slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-tl-xl rounded-bl-xl  bg-[#c30404] bg-opacity-50 text-white hover:bg-opacity-100 transition duration-300  focus-visible:outline-none lg:h-20 lg:w-8"
                data-glide-dir=">"
                aria-label="next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <title>next slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* PArtner Slider */}
        <PartnerSlider />
      </div>
    </>
  );
};

export default TopDoctor;
