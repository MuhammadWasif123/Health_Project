"use client";
import Link from "next/link";
import NavBar from "../components/NavBar";

const labTest = () => {
  return (
    <div className="  mt-0 bg-gray-200">
      <div className="">
        <ul className="flex flex-wrap space-x-4 mb-4 ml-4 pt-4 sm:ml-16 text-xs">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">LABS</a>
          </li>
          <li>
            <a href="#">PAKISTAN</a>
          </li>
          <li>
            <a href="#">CHUGHTAI LABORATORY</a>
          </li>
        </ul>
      </div>

      <main className="flex flex-col lg:flex-row justify-center max-w-full min-w-screen mx-auto ml-4 mr-4 sm:ml-16 static">

        
        <div className="text-sm flex flex-col  lg:w-[700px] ">
          <div className="main rounded-md flex sm:flex-row h-32 gap-10 py-6 pl-8  bg-white rounded-lg ">
            <div className="flex sm:justify-start sm:col-span-1 ">
              <img src="/health1.png" className="w-20" alt="image" />
            </div>
            <div className="sm:col-span-5 flex flex-col">
              <p className="text-md font-bold">Chughtai laboratory</p>
              <p className="mt-1">Total Branches:32</p>
              <p>Available:1170</p>
            </div>
          </div>
       
          <div className="bg-white py-6 rounded-lg my-4">
            <h2 className="text-lg font-semibold ml-3 rounded-md">All Tests</h2>
            <hr className="border-t border-gray-300 my-3" />
            <div className="flex justify-end mt-5">
              <label className="mt-3 pr-2">Search:</label>
              <input className="min-h-10 mr-7 rounded-full max-w-80 border" />
            </div>
          </div>
          <div className="bg-white py-4 mb-2 flex justify-between rounded-md">
            <div className="ml-10 font-semibold">
              <p>Test Detail</p>
            </div>
            <div className="flex justify-end">
              <p className="mr-8">Price</p>
            </div>
          </div>
          <div className="bg-white leading-10 rounded-md mb-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <div className="ml-2">
                <input type="checkbox" /> 100ml Injection for Covid Positive
                (Home Care)
              </div>
              <div className="flex justify-end">
                <p className="mr-6"> Rs:200</p>
              </div>
            </div>
            <div className="ml-2">
              <input type="checkbox" /> 17-OH Progesterone
            </div>
            <div className="ml-2">
              <input type="checkbox" /> 3D Hematology (From NIBD)
            </div>
            <div className="ml-2">
              <input type="checkbox" /> 3gAllergy Specific IgE Universal Food
              Allergens Profile
            </div>
            <div className="ml-2">
              <input type="checkbox" /> 5 HIAA (24 Hrs Urine)
              (5-Hydroxyindoleacetic Acid)
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md max-h-96 max-w-sm w-full sm:w-1/2 md:w-3/5 mx-auto mb-5 flex justify-around  ">
          <div className="px-8 py-6">
            <div>
              <h2 className="text-3xl text-red-700 font-semibold ml-3 mt-3">
                Chughtai laboratory
              </h2>
              <p className="ml-4 mt-6">No Test Selected</p>
              <div>
                <div className="mt-8 flex justify-between ">
                  <div>Subtotal (0 Item)</div>
                  <div>Rs. 0</div>
                </div>
                <div className="flex justify-between">
                  <div>Discount</div>
                  <div>Rs. 0</div>
                </div>
                <div className="flex justify-between ">
                  <div>Total</div>
                  <div>Rs. 0</div>
                </div>
              </div>
            </div>

            <div className="mb-10 flex justify-center">
              <button className="w-auto sm:w-3/4 h-12 mt-14 border border-red-300 p-auto min-w-40 rounded-full transition hover:bg-red-600 hover:text-white duration-300">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default labTest;
