import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

const PartnerSlider = () => {
    useEffect(() => {
        const slider = new Glide(".glide-09", {
            type: "carousel",
            autoplay: 1,
            animationDuration: 4500,
            animationTimingFunc: "linear",
            perView: 5,
            classes: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 3,
                },
                640: {
                    perView: 1,
                    gap: 36,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])
    return (
        <>
            <div className='overflow-hidden my-12'>

                <h2 className='text-2xl font-bold text-[#c30404] mb-4'>Our Digital Partners</h2>
                {/*<!-- Component: Testimonial carousel --> */}
                <div className="glide-09 relative w-full">
                    {/* <!-- Slides --> */}
                    <div data-glide-el="track">
                        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                            <li className="bg-white shadow-lg rounded-md border-2 border-gray-100 py-8">
                                <img
                                    src="https://www.shifaam.com/themes/default/guest/img/partners/img4.webp"
                                    className="m-auto h-20 max-h-full w-auto max-w-full"
                                />
                            </li>
                            <li className="bg-white shadow-lg rounded-md border-2 border-gray-100 py-8">
                                <img
                                    src="https://www.shifaam.com/themes/default/guest/img/partners/img5.webp"
                                    className="m-auto h-20 max-h-full w-auto max-w-full"
                                />
                            </li>
                            <li className="bg-white shadow-lg rounded-md border-2 border-gray-100 py-8">
                                <img
                                    src="https://www.shifaam.com/themes/default/guest/img/partners/img6.webp"
                                    className="m-auto h-20 max-h-full w-auto max-w-full"
                                />
                            </li>
                            <li className="bg-white shadow-lg rounded-md border-2 border-gray-100 py-8">
                                <img
                                    src="https://www.shifaam.com/themes/default/guest/img/partners/img1.webp"
                                    className="m-auto h-20 max-h-full w-auto max-w-full"
                                />
                            </li>
                            <li className="bg-white shadow-lg rounded-md border-2 border-gray-100 py-8">
                                <img
                                    src="https://www.shifaam.com/themes/default/guest/img/partners/img2.webp"
                                    className="m-auto h-20 max-h-full w-auto max-w-full"
                                />
                            </li>
                            <li className="bg-white shadow-lg rounded-md border-2 border-gray-100 py-8">
                                <img
                                    src="https://www.shifaam.com/themes/default/guest/img/partners/img3.webp"
                                    className="m-auto h-20 max-h-full w-auto max-w-full"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                {/*<!-- End Testimonial carousel --> */}


            </div>
        </>
    )
}

export default PartnerSlider