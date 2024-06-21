import React from 'react'
import { AiFillStar } from "react-icons/ai";

const DoctorCard = ({ name, specialist, about, rating, location, url }) => {
    return (
        <>
            <div className="rounded-xl border-2 border-gray-100 bg-white">
                <div className="flex items-start gap-4 p-4 sm:p-6 ">
                    <a href="#" className="block shrink-0">
                        <img
                            alt=""
                            src={url}
                            className="size-14 rounded-lg object-cover cursor-pointer"
                        />
                    </a>

                    <div>
                        <h3 className="font-semibold sm:text-lg hover:text-[#c30404] transition-all ease-in-out duration-300 cursor-pointer"> {name} </h3>
                        <h4 className="font-medium sm:text-sm text-purple-700">{specialist}</h4>

                        <p className="line-clamp-2 text-sm text-gray-700">
                            {about.slice(0, 90) + "..."}
                        </p>

                        <div className="my-2 sm:flex sm:items-center sm:gap-2">
                            <div className="flex items-center gap-1 text-gray-500">
                                <AiFillStar className='text-yellow-500' />
                                <AiFillStar className='text-yellow-500' />
                                <AiFillStar className='text-yellow-500' />
                                <AiFillStar className='text-yellow-500' />
                                <AiFillStar className='text-yellow-500' />
                                <span className='text-gray-500 text-xs'> ({rating}) </span>
                            </div>

                            <div className="h-3 hidden sm:block border-l-[1px] border-gray-300"></div>

                            <p className="text-green-600 font-medium text-xs">
                                {location}
                            </p>
                        </div>

                        <div>
                            <button className='w-full border-2 border-[#c30404] text-[#c30404] rounded-full py-1 mt-1 hover:bg-[#c30404] transition-all ease-in-out duration-300 hover:shadow-md hover:text-white'>Physical / Virtual</button>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}

export default DoctorCard