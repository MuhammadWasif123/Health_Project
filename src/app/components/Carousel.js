import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import Image from 'next/image';
import img1 from '../../../public/slider_7.jpeg';
import img2 from '../../../public/slider_1.jpeg';
import img3 from '../../../public/slider_2.jpeg';
import img4 from '../../../public/slider_3.jpeg';
import img5 from '../../../public/slider_4.jpeg';
import img6 from '../../../public/slider_5.jpeg';
import img7 from '../../../public/slider_6.jpeg';



const Carousel = () => {
    useEffect(() => {
        const slider = new Glide(".glide-04", {
          type: "slider",
          focusAt: "center",
          perView: 1,
          autoplay: 3000,
          animationDuration: 700,
          gap: 0,
          classes: {
            nav: {
              active: "[&>*]:bg-[#c30404]",
            },
          },
        }).mount()
    
        return () => {
          slider.destroy()
        }
      }, [])
  return (
    <>
     {/*<!-- Component: Slider with indicators & controls inside --> */}
     <div className="relative w-full glide-04">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <Image 
               src={img1}
               className="w-full max-w-full h-[300px] m-auto object-cover"
              
              />
            </li>
            <li>
            <Image 
               src={img2}
               className="w-full max-w-full h-[300px] m-auto object-cover"
              
              />
            </li>
            <li>
            <Image 
               src={img3}
               className="w-full max-w-full h-[300px] m-auto object-cover"
              
              />
            </li>
            <li>
            <Image 
               src={img4}
               className="w-full max-w-full h-[300px] m-auto object-cover"
              
              />
            </li>
            <li>
            <Image 
               src={img5}
               className="w-full max-w-full h-[300px] m-auto object-cover"
              
              />
            </li>
            <li>
            <Image 
               src={img6}
               className="w-full max-w-full h-[300px] m-auto object-cover"
              
              />
            </li>
            <li>
            <Image 
               src={img7}
               className="w-full max-w-full h-[300px] m-auto object-cover"
              
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full  h-0 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-12 w-8 items-center justify-center rounded-tr-xl rounded-br-xl  bg-[#c30404] bg-opacity-50 text-white hover:bg-opacity-100 transition duration-300  focus-visible:outline-none lg:h-20 lg:w-8"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-12 w-8 items-center justify-center rounded-tl-xl rounded-bl-xl  bg-[#c30404] bg-opacity-50 text-white hover:bg-opacity-100 transition duration-300  focus-visible:outline-none lg:h-20 lg:w-8"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-[#ffa7a7]  focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-[#ffa7a7]   focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-[#ffa7a7]  focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-[#ffa7a7]   focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=4"
            aria-label="goto slide 5"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-[#ffa7a7]   focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=4"
            aria-label="goto slide 5"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-[#ffa7a7]   focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=4"
            aria-label="goto slide 5"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-[#ffa7a7]   focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Slider with indicators & controls inside --> */}
    </>
  )
}

export default Carousel