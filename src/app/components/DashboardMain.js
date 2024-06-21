import React from "react";
import Image from "next/image";
import Icon1 from "../../../public/icon-1.svg";
import Icon2 from "../../../public/icon-2.svg";
import Icon3 from "../../../public/icon-3.svg";
import Icon4 from "../../../public/icon-4.svg";
import Icon5 from "../../../public/icon-5.svg";

const DashboardCard = ({ name, email, amount, icon }) => {
  return (
   <>
    <div className="rounded-xl border ml-6 p-5 shadow-sm flex flex-col justify-between gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between space-x-2">
          <div className="h-12 w-12 rounded-full bg-gray-100 overflow-hidden">
            <Image
              src={Icon1}
              width={200}
              height={200}
              className="w-full"
              alt="User Icon"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">{"harry"}</p>
            <p className="text-sm text-gray-400">{"harry@gmail.com"}</p>
          </div>
        </div>
        <div className="">
          <p className="text-sm ">{"100,00"}</p>
        </div>
      </div>
    </div>
    <div className="rounded-xl border ml-6 p-5 shadow-sm flex flex-col justify-between gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between space-x-2">
          <div className="h-12 w-12 rounded-full bg-gray-100 overflow-hidden">
            <Image
              src={Icon1}
              width={200}
              height={200}
              className="w-full"
              alt="User Icon"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">{"harry"}</p>
            <p className="text-sm text-gray-400">{"harry@gmail.com"}</p>
          </div>
        </div>
        <div className="">
          <p className="text-sm ">{"100,00"}</p>
        </div>
      </div>
    </div>
    <div className="rounded-xl border ml-6 p-5 shadow-sm flex flex-col justify-between gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between space-x-2">
          <div className="h-12 w-12 rounded-full bg-gray-100 overflow-hidden">
            <Image
              src={Icon1}
              width={200}
              height={200}
              className="w-full"
              alt="User Icon"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">{"harry"}</p>
            <p className="text-sm text-gray-400">{"harry@gmail.com"}</p>
          </div>
        </div>
        <div className="">
          <p className="text-sm ">{"100,00"}</p>
        </div>
      </div>
    </div>
    <div className="rounded-xl border ml-6 p-5 shadow-sm flex flex-col justify-between gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between space-x-2">
          <div className="h-12 w-12 rounded-full bg-gray-100 overflow-hidden">
            <Image
              src={Icon1}
              width={200}
              height={200}
              className="w-full"
              alt="User Icon"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">{"harry"}</p>
            <p className="text-sm text-gray-400">{"harry@gmail.com"}</p>
          </div>
        </div>
        <div className="">
          <p className="text-sm ">{"100,00"}</p>
        </div>
      </div>
    </div>
   
   
   </>
  );
};

export default DashboardCard;
