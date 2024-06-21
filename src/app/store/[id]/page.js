"use client";
import ProductCard from "@/app/components/ProductCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    // main div
    <div className="w-[90%] mx-auto">
      <div
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        className="my-4 bg-white p-2"
      >
        {/* card */}
        <div className="p-2">
          {/* about card */}
          <div className="flex flex-col lg:flex-row">
            {/* card img */}
            <div className="flex justify-center items-center w-full lg:w-2/4 bg-gray-100 rounded-md">
              <Image src="/medicine.png" alt="logo" width={300} height={300} />
            </div>

            {/* card info */}
            <div className="w-full mt-4 sm:mt-2 lg:ml-10 lg:w-3/4">
              {/* product name */}
              <h2 className="text-[24px]">Hitone 30g Cream</h2>

              {/* product price */}
              <p className="text-[24px] font-bold text-red-800">Rs.1111</p>

              {/* product size */}
              <div className="text-red-800 text-lg">
                Size
                <p className="w-1/2 border text-black rounded-md my-2 py-1 px-2">
                  Tube
                </p>
              </div>

              {/* product quantity */}
              <div className="text-red-800 text-lg">
                <p>Quantity</p>
                <div className="flex gap-2 items-center">
                  <button className="hover:bg-red-800 text-gray-200 border border-gray-200 rounded-full w-10 h-10 p-2 hover:text-white">
                    -
                  </button>
                  <input
                    className="w-12 py-1 px-2 border border-gray-200"
                    type="number"
                    defaultValue={1}
                  />
                  <button className="hover:bg-red-800 text-gray-200 border border-gray-200 rounded-full w-10 h-10 p-2 hover:text-white">
                    +
                  </button>
                </div>
              </div>

              {/* Buy Now  */}
              <div className="flex gap-3 my-3">
                <button className="rounded-full text-red-800 sm:py-2 py-1 sm:px-4 px-2 hover:bg-red-800 border border-red-800 hover:text-white">
                  Add To Cart
                </button>
                <button className="rounded-full text-red-700 sm:py-2 py-1 sm:px-4 px-2 hover:bg-red-700 border border-red-700 hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* similar product */}
      </div>
      <div>
        <h1 className="font-bold text-[24px] text-center my-4">Similar Products</h1>
        <div data-glide-el="track" className="flex justify-center items-start">
          <ul className="[backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2">
            <ProductCard
              imgSrc="https://www.shifaam.com/uploads/store/panadol.webp"
              price="3"
              productName="Panadol 500mg Tablet"
            />
            <ProductCard
              imgSrc="https://www.shifaam.com/uploads/store/cac.webp"
              price="222"
              productName="Cac-1000 Orange 10 s"
            />
            <ProductCard
              imgSrc="https://www.shifaam.com/uploads/store/flagyl.webp"
              price="41"
              productName="Flagyl 400mg Tablet"
            />
            <ProductCard
              imgSrc="https://www.shifaam.com/uploads/store/cranmax.webp"
              price="50"
              productName="Cranmax Sachet"
            />
            <ProductCard
              imgSrc="https://www.shifaam.com/uploads/store/polyfax.webp"
              price="99"
              productName="Polyfax Skin 20g Ointment"
            />
            <ProductCard
              imgSrc="https://www.shifaam.com/uploads/store/Brufen%20120ml.webp"
              price="102"
              productName="Burfen 120ml Syrup"
            />
            <ProductCard
              imgSrc="https://www.shifaam.com/uploads/store/05405.jpeg"
              price="26"
              productName="Ascard 75mg Tablet"
            />
          </ul>
        </div>
      </div>
    </div >
  );
};

export default page;
