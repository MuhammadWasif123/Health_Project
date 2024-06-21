import React from "react";

const PromotionCard = ({ src, title }) => {
  return (
    <div className="border-2 border-gray-100 bg-white py-6 gap-2 px-6 grid place-items-center hover:shadow-xl transition-all ease-in-out duration-300 cursor-pointer">
      <img src={src} alt="promotion image here" className="" />
      <h3 className="font-medium text-center">{title}</h3>
    </div>
  );
};

export default PromotionCard;
