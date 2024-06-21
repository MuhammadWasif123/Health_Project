"use client"
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <div className='bg-gray-100 py-20 flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-[400px] mx-[30px] rounded-md shadow-xl px-6 py-8'>
                <h2 className='text-2xl font-bold text-[#c30404] mb-4'>Patient Login</h2>
                <label htmlFor='nmb' className=''>Mobile Number</label>
                {errors.number && <p className='text-red-600 p-2 rounded-md'>number is required</p>}
                <input {...register("number", { required: true })} type='number' id='nmb' placeholder="0301 2345678" className="bg-transparent mt-1 mb-8 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                <label htmlFor='pwd' className=''>Password</label>
                {errors.password && <p className='text-red-600 p-2 rounded-md'>number is required</p>}
                <input {...register("password", { required: true })} type='password' id='pwd' placeholder="Password" className="bg-transparent mt-1 mb-2 outline-none border border-gray-300 focus:border-[#c30404] focus:outline-none focus:shadow-md px-4 py-2 w-full rounded-md" />
                <div className='flex justify-end'>
                    <a className='text-xs text-gray-500 font-semibold hover:text-[#c30404] hover:cursor-pointer transition-all ease-in-out duration-300'>Forgot Password ?</a>
                </div>
                <div>
                    <button type='submit' className='w-full border border-[#c30404] mt-4 text-[#c30404] rounded-full py-1  hover:bg-[#c30404] transition-all ease-in-out duration-300 hover:shadow-md hover:text-white'>Login</button>
                </div>
                <div className='flex justify-center mt-4'>
                    <p className='text-sm text-gray-500 font-medium '>Don't have an account? <Link href="/patient/signup" className='text-[#c30404] hover:cursor-pointer'>Sign up here</Link></p>
                </div>
            </form>
        </div>
    )
}

export default page