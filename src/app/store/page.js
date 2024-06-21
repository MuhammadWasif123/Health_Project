import React from "react";
import ProductCard from "../components/product/ProductCard";
import { productData } from "../components/product/productData";

const page = () => {
  return (
    <>
      <div className="px-6 md:px-12 bg-gray-50 py-4 md:flex gap-4 space-y-4 md:space-y-0">
        {/* filter Section */}
        <div className="bg-white rounded-md shadow-md md:w-2/6 lg:w-1/4  py-3">
          <h2 className="text-xl font-bold text-[#c30404] mx-3 my-2">
            Filters
          </h2>
          <div class="border-t border-gray-300 my-2 "></div>
          <div className="px-3 py-3">
            <button className="w-full border border-[#c30404] text-[#c30404] rounded-full py-1 hover:bg-[#c30404] transition-all ease-in-out duration-300 hover:shadow-md hover:text-white">
              Order Via Prescription
            </button>
          </div>
          <div class="border-t border-gray-300 my-2 "></div>
          <div className="px-3 py-3">
            <input
              id="id-s03"
              type="search"
              name="id-s03"
              placeholder="Select Category..."
              aria-label="Search content"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#c30404] focus:shadow-md focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
          </div>
          <div class="border-t border-gray-300 my-2 "></div>

          {/* Check Boxes */}
          <div className="px-3 py-3">
            <div className="relative flex flex-wrap items-center py-1">
              <input
                className="peer h-4 w-4 cursor-pointer appearance-none  rounded border border-[#c30404] bg-white transition-colors checked:border-[#c30404] checked:bg-[#c30404] checked:hover:border-[#c30404] checked:hover:bg-[#c30404] focus:outline-none checked:focus:border-[#c30404] checked:focus:bg-[#c30404] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                type="checkbox"
                id="id-c01"
              />
              <label
                className="cursor-pointer text-sm md:text-xs lg:text-sm pl-2 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="id-c01"
              >
                {" "}
                Food & Nutrition{" "}
              </label>
              <svg
                className="pointer-events-none absolute left-0 top-[6px] h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-labelledby="title-1 description-1"
                role="graphics-symbol"
              >
                <title id="title-1">Check mark icon</title>
                <desc id="description-1">
                  {" "}
                  Check mark icon to indicate whether the radio input is checked
                  or not.
                </desc>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
              </svg>
            </div>

            <div className="relative flex flex-wrap items-center py-1">
              <input
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#c30404] bg-white transition-colors checked:border-[#c30404] checked:bg-[#c30404] checked:hover:border-[#c30404] checked:hover:bg-[#c30404] focus:outline-none checked:focus:border-[#c30404] checked:focus:bg-[#c30404] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                type="checkbox"
                id="id-c02"
              />
              <label
                className="cursor-pointer text-sm md:text-xs lg:text-sm pl-2 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="id-c02"
              >
                {" "}
                Health & Fitness{" "}
              </label>
              <svg
                className="pointer-events-none absolute left-0 top-[6px] h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-labelledby="title-1 description-1"
                role="graphics-symbol"
              >
                <title id="title-1">Check mark icon</title>
                <desc id="description-1">
                  {" "}
                  Check mark icon to indicate whether the radio input is checked
                  or not.
                </desc>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
              </svg>
            </div>

            <div className="relative flex flex-wrap items-center py-1">
              <input
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#c30404] bg-white transition-colors checked:border-[#c30404] checked:bg-[#c30404] checked:hover:border-[#c30404] checked:hover:bg-[#c30404] focus:outline-none checked:focus:border-[#c30404] checked:focus:bg-[#c30404] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                type="checkbox"
                id="id-c03"
              />
              <label
                className="cursor-pointer text-sm md:text-xs lg:text-sm pl-2 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="id-c03"
              >
                {" "}
                Herbal & Homeopathy{" "}
              </label>
              <svg
                className="pointer-events-none absolute left-0 top-[6px] h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-labelledby="title-1 description-1"
                role="graphics-symbol"
              >
                <title id="title-1">Check mark icon</title>
                <desc id="description-1">
                  {" "}
                  Check mark icon to indicate whether the radio input is checked
                  or not.
                </desc>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
              </svg>
            </div>

            <div className="relative flex flex-wrap items-center py-1">
              <input
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#c30404] bg-white transition-colors checked:border-[#c30404] checked:bg-[#c30404] checked:hover:border-[#c30404] checked:hover:bg-[#c30404] focus:outline-none checked:focus:border-[#c30404] checked:focus:bg-[#c30404] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                type="checkbox"
                id="id-c04"
              />
              <label
                className="cursor-pointer text-sm md:text-xs lg:text-sm pl-2 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="id-c04"
              >
                {" "}
                Household & Beauty{" "}
              </label>
              <svg
                className="pointer-events-none absolute left-0 top-[6px] h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-labelledby="title-1 description-1"
                role="graphics-symbol"
              >
                <title id="title-1">Check mark icon</title>
                <desc id="description-1">
                  {" "}
                  Check mark icon to indicate whether the radio input is checked
                  or not.
                </desc>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
              </svg>
            </div>

            <div className="relative flex flex-wrap items-center py-1">
              <input
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#c30404] bg-white transition-colors checked:border-[#c30404] checked:bg-[#c30404] checked:hover:border-[#c30404] checked:hover:bg-[#c30404] focus:outline-none checked:focus:border-[#c30404] checked:focus:bg-[#c30404] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                type="checkbox"
                id="id-c05"
              />
              <label
                className="cursor-pointer text-sm md:text-xs lg:text-sm pl-2 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="id-c05"
              >
                {" "}
                Mama & Baby Care{" "}
              </label>
              <svg
                className="pointer-events-none absolute left-0 top-[6px] h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-labelledby="title-1 description-1"
                role="graphics-symbol"
              >
                <title id="title-1">Check mark icon</title>
                <desc id="description-1">
                  {" "}
                  Check mark icon to indicate whether the radio input is checked
                  or not.
                </desc>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
              </svg>
            </div>

            <div className="relative flex flex-wrap items-center py-1">
              <input
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#c30404] bg-white transition-colors checked:border-[#c30404] checked:bg-[#c30404] checked:hover:border-[#c30404] checked:hover:bg-[#c30404] focus:outline-none checked:focus:border-[#c30404] checked:focus:bg-[#c30404] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                type="checkbox"
                id="id-c06"
              />
              <label
                className="cursor-pointer text-sm md:text-xs lg:text-sm pl-2 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="id-c06"
              >
                {" "}
                Medical Devices & Instruments{" "}
              </label>
              <svg
                className="pointer-events-none absolute left-0 top-[6px] h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-labelledby="title-1 description-1"
                role="graphics-symbol"
              >
                <title id="title-1">Check mark icon</title>
                <desc id="description-1">
                  {" "}
                  Check mark icon to indicate whether the radio input is checked
                  or not.
                </desc>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
              </svg>
            </div>

            <div className="relative flex flex-wrap items-center py-1">
              <input
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#c30404] bg-white transition-colors checked:border-[#c30404] checked:bg-[#c30404] checked:hover:border-[#c30404] checked:hover:bg-[#c30404] focus:outline-none checked:focus:border-[#c30404] checked:focus:bg-[#c30404] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                type="checkbox"
                id="id-c07"
              />
              <label
                className="cursor-pointer text-sm md:text-xs lg:text-sm pl-2 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="id-c07"
              >
                {" "}
                Medicine{" "}
              </label>
              <svg
                className="pointer-events-none absolute left-0 top-[6px] h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-labelledby="title-1 description-1"
                role="graphics-symbol"
              >
                <title id="title-1">Check mark icon</title>
                <desc id="description-1">
                  {" "}
                  Check mark icon to indicate whether the radio input is checked
                  or not.
                </desc>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
              </svg>
            </div>

            <div className="relative flex flex-wrap items-center py-1">
              <input
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#c30404] bg-white transition-colors checked:border-[#c30404] checked:bg-[#c30404] checked:hover:border-[#c30404] checked:hover:bg-[#c30404] focus:outline-none checked:focus:border-[#c30404] checked:focus:bg-[#c30404] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                type="checkbox"
                id="id-c08"
              />
              <label
                className="cursor-pointer text-sm md:text-xs lg:text-sm pl-2 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="id-c08"
              >
                {" "}
                Personal Care{" "}
              </label>
              <svg
                className="pointer-events-none absolute left-0 top-[6px] h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-labelledby="title-1 description-1"
                role="graphics-symbol"
              >
                <title id="title-1">Check mark icon</title>
                <desc id="description-1">
                  {" "}
                  Check mark icon to indicate whether the radio input is checked
                  or not.
                </desc>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
              </svg>
            </div>

            <div className="relative flex flex-wrap items-center py-1">
              <input
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#c30404] bg-white transition-colors checked:border-[#c30404] checked:bg-[#c30404] checked:hover:border-[#c30404] checked:hover:bg-[#c30404] focus:outline-none checked:focus:border-[#c30404] checked:focus:bg-[#c30404] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                type="checkbox"
                id="id-c09"
              />
              <label
                className="cursor-pointer text-sm md:text-xs lg:text-sm pl-2 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                htmlFor="id-c09"
              >
                {" "}
                Surgical & Disposables{" "}
              </label>
              <svg
                className="pointer-events-none absolute left-0 top-[6px] h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-labelledby="title-1 description-1"
                role="graphics-symbol"
              >
                <title id="title-1">Check mark icon</title>
                <desc id="description-1">
                  {" "}
                  Check mark icon to indicate whether the radio input is checked
                  or not.
                </desc>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Pharmacy Section */}
        <div className="bg-white rounded-md shadow-md md:w-4/6 lg:w-3/4   py-3">
          <div className="flex justify-between items-center mx-3">
            <h2 className="text-xl font-bold text-[#c30404]">Pharmacy</h2>
            <div className="relative">
              <input
                id="id-s03"
                type="search"
                name="id-s03"
                placeholder="Search Medicine"
                aria-label="Search content"
                className="peer relative h-10 w-full rounded-full border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#c30404] focus:shadow-md focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                viewBox="0 0 24 24"
                mstroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                aria-label="Search icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          <div class="border-t border-gray-300 my-2 "></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-3 py-2 ">
            {productData.map((card, index) => (
              <ProductCard
                key={index}
                img={card.img}
                price={card.price}
                name={card.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
