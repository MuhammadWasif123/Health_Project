import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaHospital } from "react-icons/fa";
import Searchbar from "../components/Searchbar";

const page = () => {
  return (
    <>

      <div className="max-w-[80rem] mx-auto">
      <Searchbar options={["Karachi", "Lahore", "Islamabad"]}
       searchingFor={["Doctor", "Lab", "Pharmacy"]}
      showSecDropdown={true}
      placeholder={"Search Doctor medicine or lab test"}
       heading={"Best Dermatologists in Pakistan"} 
       line2={"Book an appointment instantly for the Best Dermatologist in Pakistan using Shifaam’s online appointment booking feature. This allows you to effortlessly book an appointment with a Dermatologist / Skin Specialist in Pakistan, and you can choose to either visit their clinic or consult online at Shifaam Virtual Clinic without the hassle of leaving your home."}  />

<div className="flex flex-col md:flex-row justify-center space-x-4 bg-slate-200 px-12 md:px-6">
<div class="relative my-6 md:w-60">
<select id="id-04" name="id-04" required class="relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white peer-focus:fill-red-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 peer-focus-border">
    <option value="" disabled selected></option>
    <option value="1">Consultation Type</option>
    <option value="2">All </option>
    <option value="3">Physical </option>
    <option value="3">Virtual </option>
  </select>
  <label for="id-04" class="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:fill-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
    Consultation Type
  </label>
  <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-red-500 peer-disabled:cursor-not-allowed" viewBox="0 0 20 20" fill="currentColor" aria-labelledby="title-04 description-04" role="graphics-symbol">
    <title id="title-04">Arrow Icon</title>
    <desc id="description-04">Arrow icon of the select list.</desc>
    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
</div>

<div class="relative my-6 md:w-60">
  <select id="id-04" name="id-04" required class="relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white peer-focus:fill-red-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
    <option value="" disabled selected></option>
    <option value="1">Surgical Orcologist</option>
    <option value="2">Speciality</option>
    <option value="3">Cardiologist</option>
  </select>
  <label for="id-04" class="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
  Surgical Orcologist
  </label>
  <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-red-500 peer-disabled:cursor-not-allowed" viewBox="0 0 20 20" fill="currentColor" aria-labelledby="title-04 description-04" role="graphics-symbol">
    <title id="title-04">Arrow Icon</title>
    <desc id="description-04">Arrow icon of the select list.</desc>
    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
</div>

<div class="relative my-6 md:w-60">
  <select id="id-04" name="id-04" required class="relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white peer-focus:fill-red-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
    <option value="" disabled selected></option>
    <option value="1">Gender</option>
    <option value="2">Any</option>
    <option value="3">Male</option>
    <option value="3">Female</option>
  </select>
  <label for="id-04" class="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:fill-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
    Gender
  </label>
  <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-red-500 peer-disabled:cursor-not-allowed" viewBox="0 0 20 20" fill="currentColor" aria-labelledby="title-04 description-04" role="graphics-symbol">
    <title id="title-04">Arrow Icon</title>
    <desc id="description-04">Arrow icon of the select list.</desc>
    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
</div>

<div class="relative my-6 md:w-60">
  <select id="id-04" name="id-04" required class="relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white peer-focus:fill-red-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
    <option value="" disabled selected></option>
    <option value="1">Price</option>
    <option value="2">Any</option>
    <option value="3">Less than 1000</option>
    <option value="3">Less than 2000</option>
    <option value="3">Less than 3000</option>
    <option value="3">Less than 4000</option>
    <option value="3">Less than 5000</option>
  </select>
  <label for="id-04" class="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:fill-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
    Price
  </label>
  <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-red-500 peer-disabled:cursor-not-allowed" viewBox="0 0 20 20" fill="currentColor" aria-labelledby="title-04 description-04" role="graphics-symbol">
    <title id="title-04">Arrow Icon</title>
    <desc id="description-04">Arrow icon of the select list.</desc>
    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
</div>
</div>


        <h2 className="text-2xl  px-12  font-bold text-[#c30404] mt-5">
          54 Best Dermatologists in Pakistan
        </h2>

        <div className="w-5/6 px-12 py-6 m-auto shadow-lg bg-grey-600  rounded-lg mt-4 mb-4 ">
          <div className="flex justify-between flex-wrap gap-6">
            <div className="flex">
              <div>
                <img
                  className="w-[130px] h-[130px]"
                  src="doctor1.jpeg"
                  alt="img"
                />
              </div>
              <div className="px-8">
                <b><h2>Dr Sheba Farooq</h2></b>

                <div className="flex items-center gap-1 text-yellow-400 ">
                  <FaStar />
                  <FaStar /> <FaStar />
                  <FaStar />
                  <FaStar />
                  <b><p className="text-black"> 22 reviews</p></b>
                </div>
                <p className="text-grey-700 text-sm">Dermatologist</p>
                
                  <p>Experience: 14 Year(s)</p>
                
              </div>
              <div className="flex rounded-2xl gap-1 items-center px-3 py-1 h-9 bg-blue-100">
                <div>
                  <img
                    className="block select-none mx-auto bg-gray-100 transition duration-300"
                    src="https://www.shifaam.com/themes/default/guest/img/pmc.png"
                  ></img>
                </div>
                <p className="text-blue-700">PMC Verified</p>
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
              <div className=" border border-pink-500 rounded-md px-8 py-4 ">
                <h2 className="flex items-center font-bold gap-4">
                  <span className="bg-pink-600 p-1 rounded-full">
                    <FaVideo className=" text-white" />
                  </span>
                  Shifaam Virtial Clinic
                </h2>
                <div className="flex justify-between mt-6">
                  <p className="flex items-center text-green-500">
                    <TbWorld />
                    Available
                  </p>
                  <b><p>Rs.500</p></b>
                </div>
              </div>

              <div className=" border border-grey-500 rounded-md px-8 py-4 ">
                <h2 className="flex items-center font-bold gap-4">
                  <span className="bg-pink-600 p-1 rounded-full">
                    <FaVideo className=" text-white" />
                  </span>
                  Reddot Medical Center
                </h2>
                <div className="flex justify-between mt-6">
                  <p className="flex items-center text-green-500">
                    <TbWorld />
                    Available
                  </p>
                  <b><p>Rs.1000</p></b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-5/6 px-12 py-6 m-auto shadow-xl bg-grey-600  rounded-lg mt-4 mb-4 ">
          <div className="flex justify-between flex-wrap gap-6">
            <div className="flex">
              <div>
                <img
                  className="w-[130px] h-[130px] block select-none mx-auto bg-gray-100 transition duration-300"
                  src="https://www.shifaam.com/uploads/profile-images/1633162038-doctor.jpeg"
                ></img>
              </div>
              <div className="px-8">
               <b><h1>Dr Brig Rtd Ajmal Rashid</h1></b>

                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar /> <FaStar />
                  <FaStar />
                  <FaStar />
                  <b>
                    <p className="text-black"> 15 reviews</p>
                  </b>
                </div>
                <p className="text-grey-700 text-sm">Dermatologist</p>
                <p>Experience: 33 Year(s)</p>
              </div>
              <div className="flex rounded-2xl gap-1 items-center px-3 py-1 h-9 bg-blue-100">
                <div>
                  <img
                    className="block select-none mx-auto bg-gray-100 transition duration-300"
                    src="https://www.shifaam.com/themes/default/guest/img/pmc.png"
                  ></img>
                </div>
                <p className="text-blue-700">PMC Verified</p>
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
            <div className="flex  flex-wrap pt-20 gap-8">
              <div className=" border border-pink-500 rounded-md px-8 py-4 ">
                <h2 className="flex items-center font-bold gap-4">
                  <span className="bg-pink-600 p-1 rounded-full">
                    <FaVideo className=" text-white" />
                  </span>
                  Shifaam Virtial Clinic
                </h2>
                <div className="flex justify-between mt-6">
                  <p className="flex items-center text-green-500">
                    <TbWorld />
                    Available
                  </p>
                  <b><p>Rs.1500</p></b>
                </div>
              </div>

              <div className=" border border-grey-500 rounded-md px-8 py-4 ">
                <h2 className="flex items-center font-bold gap-4">
                  <span className="bg-pink-600 p-1 rounded-full">
                    <FaHospital className=" text-white" />
                  </span>
                  Health Icon Medical & Diagnostic Centre
                </h2>
                <div className="flex justify-between mt-6">
                  <p className="flex items-center text-green-500">
                    <TbWorld />
                    Available
                  </p>
                 <b> <p>Rs.1500</p></b>
                </div>
              </div>
              <div className=" border border-grey-500 rounded-md px-8 py-4 ">
                <h2 className="flex items-center font-bold gap-4">
                  <span className="bg-pink-600 p-1 rounded-full">
                    <FaHospital className=" text-white" />
                  </span>
                  Cbm Health Centre Malir Cantt
                </h2>
                <div className="flex justify-between mt-6">
                  <p className="flex items-center text-green-500">
                    <TbWorld />
                    Available
                  </p>
                 <b> <p>Rs.1000</p></b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-5/6 px-12 py-6 m-auto shadow-xl bg-grey-600  rounded-lg mt-4 mb-4 ">
          <div className="flex justify-between flex-wrap gap-6">
            <div className="flex">
              <div>
                <img
                  class="w-[130px] h-[130px] block select-none mx-auto bg-gray-100 transition duration-300"
                  src="https://www.shifaam.com/uploads/profile-images/1651224494-doctor.jpeg"
                ></img>
              </div>
              <div className="px-8">
               <b><h1>Dr. Farheena Feroz</h1></b>

                <div className="flex items-center gap-1 text-yellow-400 ">
                  <FaStar />
                  <FaStar />
                  <FaStar /> <FaStar />
                  <FaStar />
                  <b>
                    <p className="text-black"> 12 reviews</p>
                  </b>
                </div>
                <p className="text-grey-700 text-sm">Dermatologist</p>

                <p>Experience: 33 Year(s)</p>
              </div>
              <div className="flex rounded-2xl gap-1 items-center px-3 py-1 h-9 bg-blue-100">
                <div>
                  <img
                    className="block select-none mx-auto bg-gray-100 transition duration-300"
                    src="https://www.shifaam.com/themes/default/guest/img/pmc.png"
                  ></img>
                </div>
                <p className="text-blue-700">PMC Verified</p>
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
                  <b><p>Rs.800</p></b>
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
                  <b><p>Rs.800</p></b>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    
    </>
  );
};

export default page;

