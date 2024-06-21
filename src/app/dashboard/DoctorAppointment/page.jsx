"use client";
import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


const page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [hospital, setHospital] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [startTime,setStartTime]=useState("");
  const [endTime,setEndTime]=useState("");
  const [daysWithTimings,setDaysWithTimings]=useState([]);
  const router=useRouter();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();



  const hospitalsArray = [
    "Civil",
    "Mamji",
    "Jinnah",
    "Aiwan-e-Tijarat",
    "Saifee",
  ];


  const availableDays=[
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
   "Sunday"

  ]
  const handleDayAndTimeChange = (index, field, value) => {
    setDaysWithTimings((prevDaysWithTimings) => {
      const updatedDaysWithTimings = [...prevDaysWithTimings];
      updatedDaysWithTimings[index][field] = value;
      return updatedDaysWithTimings;
    });
  };

  const handleAddDayAndTime = () => {
    setDaysWithTimings((prevDaysWithTimings) => [
      ...prevDaysWithTimings,
      { day: "", startTime: "", endTime: "" },
    ]);
  };

  const handleRemoveDayAndTime = (index) => {
    setDaysWithTimings((prevDaysWithTimings) =>
      prevDaysWithTimings.filter((_, i) => i !== index)
    );
  };

  const handleFormSubmit = (data) => {
    // Process form submission with data
  };

  return (
    <>
      <div className=" pt-[4px] pb-[6px] rounded-lg flex  gap-x-10 bg-gray-100 ">
        <SideNavbar />

        <div className=" py-20 flex w-full ">
        <form
          className="bg-white w-full max-w-[600px] rounded-md shadow-md mx-4 py-4 px-4"
        >
          <h2 className="text-2xl font-bold text-[#c30404] mb-2 text-left">
            Post Appointment
          </h2>
          <div className="flex flex-wrap -mx-2 my-4">
            <div className="w-full sm:w-full px-2 mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 border rounded-md"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <p className="text-red-500">First Name is required</p>}
            </div>
            <div className="w-full sm:w-full px-2 mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full p-2 border rounded-md"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && <p className="text-red-500">Last Name is required</p>}
            </div>
            <div className="w-full sm:full px-2 mb-4">
            <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Hospitals
              </label>
           
            <select
             className="w-full text-[16px] text-gray-700 p-[10px] pl-[10px] pr-[15px] rounded-[7px] border border-gray-500"
                value={hospital}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setDoctorFirstName("");
                  setDoctorLastName("");
                }}
              >
                {hospitalsArray.map((hospital, index) => {
                  return (
                    <option value={hospital} key={index}>
                      {hospital}
                    </option>
                  );
                })}
              </select>

              {/* {errors.cnic_number && <p className="text-red-500">CNIC is required</p>} */}
            </div>
            <div className="w-full sm:w-full px-2 mb-4">
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Experience
              </label>
              <input
                type="number"
                id="experience"
                className="w-full p-2 border rounded-md"
                placeholder="Experience"
              />
              {errors.experience && <p className="text-red-500">Experience is required</p>}
            </div>
            <div className="w-full sm:w-full px-2 mb-4">
              <label
                htmlFor="pmcCertification"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Doctor's Image
              </label>
              <input
                type="file"
                id="pmcCertification"
                className="w-full p-2 border rounded-md"
                {...register("pmc_certificate", { required: true })}
              />
              {errors.pmc_certificate && <p className="text-red-500">PMC Certification is required</p>}
            </div>
           
            <div className="w-full sm:w-full px-2 mb-4">
              {daysWithTimings.map((dayWithTiming, index) => (
                <div key={index} className="w-full sm:w-1/2 px-2 mb-4">
                  <label
                    htmlFor={`day-${index}`}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Day
                  </label>
                  <select
                    id={`day-${index}`}
                    className="w-full p-2 border rounded-md"
                    value={dayWithTiming.day}
                    onChange={(e) =>
                      handleDayAndTimeChange(index, "day", e.target.value)
                    }
                  >
                    <option value="">Select Day</option>
                    {availableDays.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <label
                    htmlFor={`startTime-${index}`}
                    className="block text-sm font-medium text-gray-700 mb-2 mt-4"
                  >
                    Start Time
                  </label>
                  <input
                    type="time"
                    id={`startTime-${index}`}
                    className="w-full p-2 border rounded-md"
                    value={dayWithTiming.startTime}
                    onChange={(e) =>
                      handleDayAndTimeChange(index, "startTime", e.target.value)
                    }
                  />
                  <label
                    htmlFor={`endTime-${index}`}
                    className="block text-sm font-medium text-gray-700 mb-2 mt-4"
                  >
                    End Time
                  </label>
                  <input
                    type="time"
                    id={`endTime-${index}`}
                    className="w-full p-2 border rounded-md"
                    value={dayWithTiming.endTime}
                    onChange={(e) =>
                      handleDayAndTimeChange(index, "endTime", e.target.value)
                    }
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveDayAndTime(index)}
                      className="mt-4 text-red-500 underline cursor-pointer"
                    >
                      Remove Day
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full">
              <button
                type="button"
                onClick={handleAddDayAndTime}
                className="border text-[#c30404] mb-[22px] w-[85%] p-[5px] border-[#c30404] rounded-full py-1 hover:bg-[#c30404] hover:text-white transition-all ease-in-out duration-300 hover:shadow-md font-semibold mr-2"
              >
                Add Day
              </button>
              </div>

            


           
            <div className="w-full sm:w-full px-2 mb-4">
              <label
                htmlFor="speciality"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Speciality
              </label>
              <input
                type="text"
                id="speciality"
                className="w-full p-2 border rounded-md"
                placeholder="Speciality"
                {...register("speciality", { required: true })}
              />
              {errors.speciality && <p className="text-red-500">Speciality is required</p>}
            </div>
            <div className="w-full sm:w-full px-2 mb-4">
              <label
                htmlFor="education"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Education
              </label>
              <input
                type="text"
                id="education"
                className="w-full p-2 border rounded-md"
                placeholder="Education"
                {...register("education", { required: true })}
              />
              {errors.education && <p className="text-red-500">Education is required</p>}
            </div>
          </div>
          <div className="w-full sm:w-full px-2 mb-4">
            {/* <div>
          <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">Start Time</label>
        <input
          type="time"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div> */}
      {/* <div className="mb-4">
        <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">End Time</label>
        <input
          type="time"
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div> */}
      {/* <div>
        <p>Available from {startTime} to {endTime}</p>

             
            </div> */}
          </div>



          <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[94%] border text-[#c30404] border-[#c30404] rounded-full py-1 hover:bg-[#c30404] hover:text-white transition-all ease-in-out duration-300 hover:shadow-md font-semibold"
                >
                  Submit
                </button>
          </div>
        </form>
      </div>
     
      </div>
    </>
  );
};

export default page;