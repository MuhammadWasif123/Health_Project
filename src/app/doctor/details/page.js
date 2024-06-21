"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useRouter } from "next/navigation";
import { useAuth } from '../../utils/context';

const Page = () => {
  const [message, setMessage] = useState("");
  const [id, setUserId] = useState("");

  const [citieslst, setCitieslst] = useState([]);
  const { handleSubmit, register, setValue, formState: { errors } } = useForm();
  const [cnic, setCnic] = useState("");
  const [pmc, setPmc] = useState("");
  const { updateRegistrationStatus, setIsUserName, completeRegistration } = useAuth();

  const router = useRouter();
  const handleCnicChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCnic(value);
    setValue("cnic_number", value);
  };

  const handlePmcChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPmc(value);
    setValue("pmc_number", value);
  };

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      setUserId(userId);
    }
    axios
      .get("https://gist.githubusercontent.com/ahmedali5530/a4f090da89989ca9e0ca04e202036c48/raw/ae6c77c2a83b15681f07431fc58b50d0563d4b47/pakistan_cities.json")
      .then((response) => setCitieslst(response.data))
      .catch((error) => console.log(error));
  }, []);

  const onSubmit = async (data) => {
    console.log("Sending data to the backend", data);
    const formData = new FormData();
    formData.append("first_name", data.firstName);
    formData.append("last_name", data.lastName);
    formData.append("education", data.education);
    formData.append("speciality", data.speciality);
    formData.append("city", data.city);
    formData.append("pmc_number", data.pmc_number);
    formData.append("cnic_number", data.cnic_number);
    formData.append("gender", data.gender);
    formData.append("userId", id);
    formData.append("pmc_certificate", data.pmc_certificate[0]);
    formData.append("profile_img", data.profile_img[0]);

    try {
      const response = await axios.post(
        "https://health-backend-6u3m.onrender.com/api/v1/doctor/details",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.message) {
        setMessage(response.data.message);

        // Update the registration status in the context
        updateRegistrationStatus(true);

        // Read username from local storage and update context
        const userName = localStorage.getItem("user_login_name");
        setIsUserName(userName);

        completeRegistration();

        // Navigate to dashboard after state update
        router.push("/dashboard");

        console.log("Response from Backend:", response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMessage("Error: " + error.response.data.message);
      } else if (error.request) {
        setMessage("No response from the backend");
      } else {
        setMessage("Error: " + error.message);
      }
    }
  };

  return (
    <ProtectedRoute>
      <div className="bg-gray-100 py-20 flex justify-center">
        <form
          className="bg-white w-full max-w-[600px] rounded-md shadow-md mx-4 py-4 px-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-bold text-[#c30404] mb-2 text-left">
            Doctor Details
          </h2>
          <div className="flex flex-wrap -mx-2 my-4">
            <div className="w-full sm:w-1/2 px-2 mb-4">
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
              {errors.firstName && (
                <p className="text-red-500">First Name is required</p>
              )}
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
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
              {errors.lastName && (
                <p className="text-red-500">Last Name is required</p>
              )}
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label
                htmlFor="profileImage"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Profile Image
              </label>
              <input
                type="file"
                id="profile-img"
                className="w-full p-2 border rounded-md"
                {...register("profile_img", { required: true })}
              />
              {errors.profile_img && (
                <p className="text-red-500">Profile Image is required</p>
              )}
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label
                htmlFor="cnic"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                CNIC
              </label>
              <input
                type="number"
                id="cnic"
                className="w-full p-2 border rounded-md"
                placeholder="CNIC"
                onChange={handleCnicChange}
                {...register("cnic_number", { required: true })}
              />
              {errors.cnic_number && (
                <p className="text-red-500">CNIC is required</p>
              )}
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label
                htmlFor="pmc"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                PMC-Number
              </label>
              <input
                type="number"
                id="pmc"
                className="w-full p-2 border rounded-md"
                placeholder="PMC-Number"
                onChange={handlePmcChange}
                {...register("pmc_number", { required: true })}
              />
              {errors.pmc_number && (
                <p className="text-red-500">PMC Number is required</p>
              )}
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label
                htmlFor="pmcCertification"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                PMC-Certification
              </label>
              <input
                type="file"
                id="pmcCertification"
                className="w-full p-2 border rounded-md"
                {...register("pmc_certificate", { required: true })}
              />
              {errors.pmc_certificate && (
                <p className="text-red-500">PMC Certification is required</p>
              )}
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                City
              </label>
              <select
                className="w-full border-2 h-10 rounded-md bg-slate-100 px-2"
                {...register("city", { required: true })}
                onChange={(e) => setValue("city", e.target.value)}
              >
                <option value="">Select City</option>
                {citieslst.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city && <p className="text-red-500">City is required</p>}
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
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
              {errors.speciality && (
                <p className="text-red-500">Speciality is required</p>
              )}
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
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
              {errors.education && (
                <p className="text-red-500">Education is required</p>
              )}
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-2 mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Gender
            </label>
            <div className="flex flex-row gap-2 font-semibold">
              <label>
                <input
                  type="radio"
                  value="male"
                  {...register("gender", { required: true })}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  {...register("gender", { required: true })}
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  value="other"
                  {...register("gender", { required: true })}
                />{" "}
                Other
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500">Gender is required</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[60%] border text-[#c30404] border-[#c30404] rounded-full py-1 hover:bg-[#c30404] hover:text-white transition-all ease-in-out duration-300 hover:shadow-md font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </ProtectedRoute>
  );
};

export default Page;
