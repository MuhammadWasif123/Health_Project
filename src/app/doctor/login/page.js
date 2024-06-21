"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../../utils/context";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");
  const { setIsUserName, updateRegistrationStatus,completeRegistration } = useAuth();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://health-backend-6u3m.onrender.com/api/v1/login",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.data.message) {
        setMessage(response.data.message);
        console.log(response.data.message);
        localStorage.setItem("user_login_token", response.data.token);
        localStorage.setItem("user_login_name", response.data.user.name);
        setIsUserName(response.data.user.name);
        updateRegistrationStatus(true);
        completeRegistration()
        router.push("/dashboard");
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
    <div className="bg-gray-100 py-20 flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[400px] mx-[30px] rounded-md shadow-xl px-6 py-8"
      >
        <h2 className="text-2xl font-bold text-[#c30404] mb-4">Doctor Login</h2>
        <div>
          <label htmlFor="nmb">Email</label>
          {errors.email && (
            <p className="text-red-600 p-2 rounded-md">Email is required</p>
          )}
          <input
            {...register("email", { required: true })}
            type="email"
            id="nmb"
            placeholder="default@gmail.com"
            className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md"
          />
        </div>
        <div>
          <label htmlFor="pwd" className="">
            Password
          </label>
          {errors.password && (
            <p className="text-red-600 p-2 rounded-md">password is required</p>
          )}
          <input
            {...register("password", { required: true })}
            type="password"
            id="pwd"
            placeholder="Password"
            className="bg-transparent mt-1 mb-2 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <a className="text-xs text-gray-500 font-semibold hover:text-[#c30404] hover:cursor-pointer transition-all ease-in-out duration-300">
            Forgot Password ?
          </a>
        </div>
        <div>
          <button
            type="submit"
            className="w-full border border-[#c30404] mt-4 text-[#c30404] rounded-full py-1  hover:bg-[#c30404] transition-all ease-in-out duration-300 hover:shadow-md hover:text-white"
          >
            Login
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-500 font-medium ">
            Don't have an account?{" "}
            <Link
              href="/doctor/signup"
              className="text-[#c30404] hover:cursor-pointer"
            >
              Sign up here
            </Link>
          </p>
        </div>
        {message && <p className="text-center mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default Page;
