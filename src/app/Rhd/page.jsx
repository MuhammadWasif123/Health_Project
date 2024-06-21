"use client";
import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const page = () => {
  const pages = [
    {
      id: 1,
      img: "/img.jpeg",
      name: "Muhammad Murad",
      title: "RHD Rahim Khan",
      para: "My name is Tufail Ahmed and I have been suffering from Asthma since childhood. I cannot afford treatment due to high costs of medication. Someone told me about Shifaam Remote Health Desk. The doctor revied my case thoroughly and prescribed medicines that were given to me free of cost. Alhamdulilah, I am feeling better and can go to work. Thank you Shifaam for this wonderful initiative. My prayers are with you.",
    },
    {
      id: 2,
      img: "/img.jpeg",
      name: "Muhammad Murad",
      title: "RHD Rahim Khan",
      para: "My name is Tufail Ahmed and I have been suffering from Asthma since childhood. I cannot afford treatment due to high costs of medication. Someone told me about Shifaam Remote Health Desk. The doctor revied my case thoroughly and prescribed medicines that were given to me free of cost. Alhamdulilah, I am feeling better and can go to work. Thank you Shifaam for this wonderful initiative. My prayers are with you.",
    },
    {
      id: 3,
      img: "/img.jpeg",
      name: "Muhammad Murad",
      title: "RHD Rahim Khan",
      para: "My name is Tufail Ahmed and I have been suffering from Asthma since childhood. I cannot afford treatment due to high costs of medication. Someone told me about Shifaam Remote Health Desk. The doctor revied my case thoroughly and prescribed medicines that were given to me free of cost. Alhamdulilah, I am feeling better and can go to work. Thank you Shifaam for this wonderful initiative. My prayers are with you.",
    },
    {
      id: 4,
      img: "/img.jpeg",
      name: "Muhammad Murad",
      title: "RHD Rahim Khan",
      para: "My name is Tufail Ahmed and I have been suffering from Asthma since childhood. I cannot afford treatment due to high costs of medication. Someone told me about Shifaam Remote Health Desk. The doctor revied my case thoroughly and prescribed medicines that were given to me free of cost. Alhamdulilah, I am feeling better and can go to work. Thank you Shifaam for this wonderful initiative. My prayers are with you.",
    },
  ];

  return (
    <>
      <div className="min-w-full">
        <div className="min-w-full flex items-center relative ">
          <div
            id="head"
            className="bg-[#fedada] py-20 sm:rounded-br-[150px] min-w-full w-4/5"
          >
            <h2 className="lg:text-5xl text-3xl px-12 font-bold text-[#c30404] mt-5">

              OneClick Remote <br></br>Health Desk
            </h2>

            <p className="px-12 text-gray-700 mt-5">
              The remote Health desk provides free online clinical help to{" "}
              <br></br>underserved patients.
            </p>

            <button className="hover:underline px-12 text-orange-600 mt-5 flex items-center gap-2">
              <MdSlowMotionVideo className="w-1/5 h-20" /> Watch Rhd Video
            </button>
          </div>

          <div className="w-2/6">
            <div className="hidden 1152:block">
              <img
                className="h-80 w-64 absolute right-[410px] object-cover object-center top-20 rounded-br-3xl rounded-tl-3xl shadow-md"
                src="doctor.jpg"
              />
            </div>
            <div className="hidden 1152:block">
              <img
                className="w-80 h-50 absolute right-[50px] top-10 object-cover object-center"
                src="doctor-2.jpg"
              />
            </div>
            <div className="hidden 1152:block">
              <img
                className="w-80 h-50 absolute right-[50px] top-[280px] object-cover object-center rounded-br-full"
                src="doctor-3.jpg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-20 xl:flex-row justify-center items-center">
  <div className="w-full xl:w-[45%] flex justify-center">
    <img className="w-[93.33%] block" src="/undrawimage.png" alt="img" />
  </div>
  
  <div className="w-full xl:w-2/4 lg:w-2/4 flex flex-col items-center xl:items-start ml-4">
    <h2 className="lg:text-5xl text-3xl mt-4 font-bold w-3/4 text-[#c30404] mb-4">
      About Nurse-Assisted Remote Health Desk
    </h2>
    <div>
      The Remote Health Desk is a nurse-assisted telemedicine clinic
      offering free-of-cost doctor-patient consultation to
      underprivileged patients in the rural areas of Pakistan. The RHD
      is accessible through the website, mobile web and through the
      Shifaam Health App which can be downloaded from Google Play
      <span className="text-blue-500 hover:underline">
        (bit.ly/2JqZo3C)
      </span>{" "}
      or the iOS App Store{" "}
      <span className="text-blue-500 hover:underline">
        (apple.co/2QUVxQz)
      </span>{" "}
    </div>
    <div className="mt-3">
      The RHD uses technology to deliver healthcare to those cannot
      afford high healthcare cost and do not have access to certified
      doctor with the help of RHD Illnesses are detected and diagnosed
      at an early stage providing efficient primary healthcare, reducing
      the overall disease burden and lowering healthcare costs.
    </div>
    <p className="mt-6 flex items-center gap-2">
      <FaRegCheckCircle className="text-[#c30404]" /> Number of RHD'S
      <span className="font-bold">- 3</span>
    </p>
    <p className="mt-3 flex items-center gap-2">
      <FaRegCheckCircle className="text-[#c30404]" />
      Patients Served & Continuing.
      <span className="font-bold">- 4850</span>
    </p>
    <p className="mt-3 flex items-center gap-2">
      <FaRegCheckCircle className="text-[#c30404]" />
      Number of Certified Doctors.
      <span className="font-bold">- 20</span>
    </p>
  </div>
</div>
        <div className="w-full mt-10 flex flex-wrap-reverse items-center">
          <div className="w-full flex-wrap md:w-1/2">
            <div>
              <h2 className="text-5xl px-6 md:px-12 font-bold mt-5">Problem</h2>
              <p className="px-6 md:px-12 mt-5 mb-16">
                Pakistan has a rural population of over 136 million people who
                have limited or no access to basic healthcare facilities.
                Unavailability of certified doctors, lack of infrastructure,
                poverty, and population growth have increased the disease burden
                in rural areas, creating a health crisis within the country.
              </p>
            </div>
            <div className=" bg-[#fdd1c8] flex flex-col justify-center pb-1 mb-24 xl:ml-[39px] ">
              <div className="py-4 px-4">
                <div className="w-full flex items-center px-12 py-4 bg-white shadow-2xl border rounded-xl mb-4 hover:shadow-gray-500">
                  <img className="w-12" src="problem-1.jpg" alt="img" />
                  <p className="px-6 w-full">
                    Inaccessibility of certified doctors
                  </p>
                </div>
                <div className="w-full flex items-center px-12 py-4 bg-white shadow-2xl border rounded-xl mb-4 hover:shadow-gray-500">
                  <img className="w-12" src="problem-2.jpg" alt="img" />
                  <p className="px-6 w-full">
                    Insufficient availability of medicines
                  </p>
                </div>
                <div className="w-full flex items-center px-12 py-4 bg-white shadow-2xl border rounded-xl mb-4 hover:shadow-gray-500">
                  <img className="w-12" src="problem-3.jpg" alt="img" />
                  <p className="px-6 w-full">Lack of infrastructures</p>
                </div>
                <div className="w-full flex items-center px-12 py-4 bg-white shadow-2xl border rounded-xl hover:shadow-gray-500">
                  <img className="w-12" src="problem-4.jpg" alt="img" />
                  <p className="px-6 w-full">Poverty</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center md:w-1/2">
            <img className="w-3/4 ml-6 md:ml-36" src="map.jpg" alt="img" />
          </div>
        </div>
        <div className="w-full md:w-[90%] m-auto flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 p-5">
            <h2 className="text-5xl text-right font-bold my-4">
              ریموٹ ہیلتھ ڈیسک
            </h2>
            <ul className="text-right mb-2">
              <li>
                موجودہ سرکاری ہسپتالوں پر بڑھتے ہوئے ہجوم کو کم کرنے کے لئے
                شِفام ہیلتھ ٹیک پرائیویٹ لمیٹڈ نے آن لائن چلنے والے ریموٹ ہیلتھ
                ڈیسک قائم کئے ہیں۔ جن میں سندھ اور پنجاب کے دیہی علاقوں میں
                مستحق مریضوں کو ۔
                <span>
                  ڈاکٹر سے مفت آن لائن مشورے کے ساتھ ساتھ مفت ادویات بھی فراہم
                  کی جاتی ہیں
                </span>
              </li>
              <li className="flex justify-end items-center gap-2 mt-2">
                .مفت ادویات
                <TiTick className="bg-green-600 rounded-full text-white" />
              </li>
              <li className="flex justify-end items-center gap-2 mt-2">
                .مفت ڈاکٹر اور مریض مشاورت
                <TiTick className="bg-green-600 rounded-full text-white" />
              </li>
              <li className="mt-4 ">
                .اگر آپ مستحق مریضوں کی مدد کے لئے اپنے علاقے میں ریموٹ ہیلتھ
                ڈیسک قائم کرنا چاہتے ہیں تو ابھی دیئے گئے نمبر پر رابطہ کریں
              </li>
              <li className="flex justify-end items-center gap-2 mt-2">
                021 37132273
                <FaPhone className="bg-green-600 rounded-full text-white" />
              </li>
              <li className="flex justify-end items-center gap-2 mt-2">
                021 37132273
                <FaMobileAlt className="bg-green-600 rounded-full text-white" />
              </li>
            </ul>
          </div>
          <div className="w-full md:w-3/4 p-5 flex justify-center">
            <img src="solution.jpg" alt="" className="w-3/4 md:w-auto" />
          </div>
        </div>
        <div className=" flex flex-col md:flex-row  items-center">
          <div className="w-2/4">
            <img src="rhd1.jpg" alt="img" />
          </div>
          <div className="md:w-2/4 w-11/12">
            <h2 className="text-5xl font-bold my-5">Patient Satisfication</h2>
            <Carousel autoPlay={true} emulateTouch={true}>
              {pages.map((page) => {
                return (
                  <div key={page.id} className="flex flex-col text-start gap-6">
                    <p>{page.para}</p>
                    <div className="flex items-center justify-start gap-6">
                      <div>
                        <img
                          className=" w-[80px] h-[80px] rounded-full"
                          src={page.img}
                          alt={page.name}
                        />
                      </div>
                      <div>
                        <p>{page.name}</p>
                        <p>{page.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
