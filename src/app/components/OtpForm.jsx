"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import otpImg from "../../../public/otp.png";
import ProtectedRoute from "../../app/components/ProtectedRoute";

const Otp = ({title}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Log data to verify structure before sending
    console.log("Sending data to backend:", {
      email: data.email,
      otp: data.otp,
      role:title,
    });

    try {
      const response = await axios.post(
        "https://health-backend-6u3m.onrender.com/api/v1/verify-otp",
        {
          email: data.email,
          otp: data.otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.message) {
        setMessage(response.data.message);
        localStorage.removeItem("email");
        localStorage.setItem("user_id",response.data.user._id);
        localStorage.setItem("user_login_name",response.data.user.name);
        localStorage.setItem("user_login_token",response.data.token);
        router.push("/doctor/details");
        console.log("Response from backend:", response.data.message);
        // router.push("/doctor/otp");
      }
    } catch (error) {
      if (error.response) {
        setMessage("Error: " + error.response.data.message);
      } else if (error.request) {
        setMessage("Error: No response from the server");
      } else {
        setMessage("Error: " + error.message);
      }
    }
  };

  return (
    <ProtectedRoute>
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form
        className="bg-white w-[400px] lg:w-[770px] mx-[30px] rounded-md shadow-md px-6 py-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-shrink-0 md:w-8/12 lg:w-[39%] xl:w-6/12 flex justify-center">
            <Image
              className="w-full md:w-full lg:w-full xl:w-full"
              alt="OTP"
              height={100}
              width={500}
              src={otpImg}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-3/4 lg:w-2/3 xl:w-2/5 md:ml-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Enter email to get OTP
            </h2>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              value={email}
              readOnly
              {...register("email", { required: true })}
            />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter OTP"
              {...register("otp", { required: true })}
            />
            {errors.otp && (
              <span className="text-red-500">This field is required</span>
            )}
            <button
              type="submit"
              className="w-full p-2 bg-[#d31c1c] hover:bg-red-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {message && <p className="text-center text-red-500 mt-4">{message}</p>}
    </div>
    </ProtectedRoute>
  );
};

export default Otp;
