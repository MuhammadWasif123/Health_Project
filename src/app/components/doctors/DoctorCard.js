import Image from "next/image";
import { FaHospital, FaStar, FaVideo } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function DoctorCard({
  id,
  img,
  name,
  experience,
  reviews,
  speciality,
  pmcVerified,
}) {
  return (
    <div className="w-5/6 px-12 py-6 m-auto shadow-xl bg-grey-600  rounded-lg mt-4 mb-4 ">
      <div className="flex justify-between flex-wrap gap-6">
        <div className="flex">
          <div>
            <Image
              class="select-none mx-auto bg-gray-100 transition duration-300 object-cover"
              src={img}
              alt={name}
              width={130}
              height={160}
            />
          </div>
          <div className="px-8">
            <b>
              <h1>{name}</h1>
            </b>

            <div className="flex items-center gap-1 text-yellow-400 ">
              <FaStar />
              <FaStar />
              <FaStar /> <FaStar />
              <FaStar />
              <b>
                <p className="text-black">{reviews} reviews</p>
              </b>
            </div>
            <p className="text-grey-700 text-sm">{speciality}</p>

            <p>Experience: {experience} Year(s)</p>
          </div>
          <div className="flex rounded-2xl gap-1 items-center px-3 py-1 h-9 bg-blue-100">
            <div>
              <img
                className="block select-none mx-auto bg-gray-100 transition duration-300"
                src="https://www.shifaam.com/themes/default/guest/img/pmc.png"
              />
            </div>
            {pmcVerified && <p className="text-blue-700">PMC Verified</p>}
          </div>
        </div>
        <div className="flex flex-col items-end gap-6">
          <button className="text-red-700 hover:text-white hover:bg-red-800 rounded-full outline-red-600 outline  px-12 border-pink-700 ">
            Book Apointment <br />
            No Booking Fee
          </button>
          <button className="text-green-700 py-2 hover:text-white hover:bg-green-700 rounded-full outline-green-600 outline  px-16  border-pink-700  ">
            View profile
          </button>
        </div>
      </div>
      <div>
        <div className="flex pt-20 gap-8">
          <div className=" border border-grey-500 rounded-md px-8 py-4 ">
            <h2 className="flex items-center font-bold gap-4">
              <span className="bg-pink-600 p-1 rounded-full">
                <FaHospital className=" text-white" />
              </span>
              Usman Memorial Hospital
            </h2>
            <div className="flex justify-between mt-6">
              <p className="flex items-center text-green-500">
                <TbWorld />
                Available
              </p>
              <b>
                <p>Rs.800</p>
              </b>
            </div>
          </div>

          <div className=" border border-pink-500 rounded-md px-8 py-4 ">
            <h2 className="flex items-center font-bold gap-4">
              <span className="bg-pink-600 p-1 rounded-full">
                <FaVideo className=" text-white" />
              </span>
              Shifaam Virtual Clinc
            </h2>
            <div className="flex justify-between mt-6">
              <p className="flex items-center text-green-500">
                <TbWorld />
                Available
              </p>
              <b>
                <p>Rs.800</p>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
