import React from "react";
import image from "../../../../public/tabba.jpeg";
import Image from "next/image";
const page = () => {
  return (
    <>
      <main className="px-6 sm:px-0">
        <div >
          <h2 className="text-2xl    font-bold text-[#c30404] mt-5">
            15 Best labs(s) in pakistan
          </h2>
        </div>

        <section className="w-full flex flex-col md:flex-row  px-6 py-6 m-auto shadow-2xl bg-grey-600  rounded-lg mt-4 mb-4 justify-between     items-center  gap-y-6 md:gap-y-0">
          <div className="flex flex-col sm:flex-row  ">
            <div className="px-12 sm:px-0 h-12 sm:h-4">
              <Image src={image} alt="img" width={100} height={100} />
            </div>
            <div className="px-0 sm:px-8 ">
              <h3 className="font-semibold text-green-900">Tabba Heart Institute</h3>

              <p className="text-grey-700 text-sm">Total Branches: 11</p>
              <p>Available Tests: 547</p>
            </div>
          </div>
          <div className="items-end gap-4">
            <button className="text-green-700 hover:text-white hover:bg-green-700 rounded-full outline-green-700 outline  px-16  border-pink-700  ">
              View profile
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
