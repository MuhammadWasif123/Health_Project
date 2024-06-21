"use client"
import Link from "next/link"
import NavBar from "../components/NavBar"
import React, { useState } from 'react';
import Dropdown from "../components/Dropdown";
import Searchbar from "../components/Searchbar"

const doctors = () => {




  return (
    <>
      <div id="heading-container" className="my-10">
        <h1 className="text-red-700 text-center font-bold text-4xl mb-2">Best Dermatologists in Pakistan</h1>
        <div className="flex justify-center">
          <p className="w-11/12 text-center">
            Book an appointment instantly for the Best Dermatologist in Pakistan using Shifaam’s online appointment booking feature. This allows you to effortlessly book an appointment with a Dermatologist / Skin Specialist in Pakistan, and you can choose to either visit their clinic or consult online at Shifaam Virtual Clinic without the hassle of leaving your home.
          </p>
        </div>
      </div>
      <Searchbar options={["Karachi", "Lahore", "Islamabad"]} showSecDropdown={false} placeholder={"Speciality, Doctor's name, clinic, hospital"} />

      <div>

        <div className="bg-slate-100  flex-row my-8">
          <div className="flex  justify-center flex-wrap">
            <Dropdown
              title="Consultation Type"
              options={['Any', 'Physical', 'Virtual']}
            />
            <Dropdown
              title="Speciality"
              options={['Cardiologist', 'Neurologist', 'Child Specialist', "Dentist", "Eye Specialist"]}
            />
            <Dropdown
              title="Gender"
              options={['Any', 'Male', 'Female']}
            />
            <Dropdown
              title="Price"
              options={['500', '1000', '2000', "3500", "5000"]}
            />
          </div>
        </div>

      </div>


    </>
  )
}
export default doctors;