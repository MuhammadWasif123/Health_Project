
"use client"
import React from "react";
import { DollarSign, Users, Activity, BriefcaseMedical, UserPlus } from "lucide-react";

const DashboardCard = () => {
  return (
    <>
   <div className="flex ml-5 flex-col md:flex-row  gap-3">
   <div className="flex flex-col w-full rounded-xl p-5 shadow">
        <section className="flex justify-between gap-2 mb-[16px]">
          <p className="text-sm">Appointments</p>
          <BriefcaseMedical className="h-6 w-6 text-gray-400" />
        
        </section>
          <h2 className="text-2xl font-semibold">50</h2>
        <section>

        </section>
      </div>
      <div className="flex flex-col w-full rounded-xl p-5 shadow ">
        <section className="flex justify-between gap-2 mb-[16px]">
          <p className="text-sm">New patients</p>
          <UserPlus className="h-6 w-6 text-gray-400" />
        </section>

        <section className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">18</h2>
          <p className="text-gray-500 text-xs">+6.1% from last month</p>
        </section>
      </div>
      <div className="flex flex-col w-full rounded-xl p-5 shadow ">
        <section className="flex justify-between gap-2 mb-[16px]">
          <p className="text-sm">Total patients</p>
          <Users className="h-6 w-6 text-gray-400" />
        </section>

        <section className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">+12,234</h2>
          <p className="text-gray-500 text-xs">+19% from last month</p>
        </section>
      </div>
      <div className="flex flex-col w-full rounded-xl p-5 shadow ">
        <section className="flex justify-between gap-2 mb-[16px]">
          <p className="text-sm">Earnings</p>
          <DollarSign className="h-6 w-6 text-gray-400" />
        </section>

        <section className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">$4573</h2>
          <p className="text-gray-500 text-xs">+201 since last hour</p>
        </section>
      </div>
   </div>
    </>
  );
};

export default DashboardCard;
