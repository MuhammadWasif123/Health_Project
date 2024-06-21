import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ img, price, name }) => {
  return (
    <>
      <div className="h-80 md:h-full lg:h-84 md:py-[10px] overflow-hidden rounded-md bg-[#EBE7E7] border-2 shadow-md border-gray-100 hover:shadow- lg hover:shadow-slate-200 relative  ">
        <figure className="flex justify-center sm:flex">
          <Image
            // aspect-video
            src={img}
            alt="card image"
            className="p-2 bg-cover hover:cursor-pointer w-[62%] md:w-[68%]  h-full object-cover lg:w-[67%]"
            width={500}
            height={500}
          />
        </figure>
        <div className="p-6 flex justify-center  md:flex md:flex-col md:justify-center gap-y-[13px]">
          <header className="lg:flex lg:flex-col lg:justify-center lg:items-center">
            <h3 className="text-xs lg:text-[0.71rem]  font-medium hover:cursor-pointer hover:text-[#c30404] transition-all ease-in-out duration-300 max-w-xs mb-4 text-center md:text-center xl:text-center">
              {name.length > 15 ? name.slice(0, 20) + "..." : name}
            </h3>
            <h2 className="text-sm lg:text-md font-bold my-1 text-center  md:text-center xl:text-center lg:mb-[15px]">
              From Rs. {price}
            </h2>
            <div className="px-2 text-center text-sm lg:text-xsm border border-[#c30404] text-[#c30404] rounded-full py-1 mt-2 hover:bg-[#c30404] transition-all ease-in-out duration-300 hover:shadow-md hover:text-white xl:absolute xl:bottom-[0.1rem] mb-2 lg:px-4 ">
              <Link href="/patient/login" className="lg:text-xsm">
                Add Cart
              </Link>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
