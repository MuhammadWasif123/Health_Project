
import React from 'react'
import DashboardCard from '../components/DashboardCard'
import DashboardMain from '../components/DashboardMain'
import SideNavbar from "../components/SideNavbar";
import ProtectedRoute from "../components/ProtectedRoute";




const page = () => {
  return (
    <ProtectedRoute>
    <div className="flex min-h-screen">
      <SideNavbar />

    <div className='flex flex-col w-full gap-5 mx-2 my-4 transition-all duration-300'>
      
        <h1 className='text-[#000] font-semibold text-2xl ml-6'>Dashboard</h1>


     <div className=' flex w-full grid-cols-1 flex-col gap-5 max-w-[1400px] m-2 xl:grid-cols-4 mx-2'>

      <div>
      <DashboardCard/>
      </div>
        <DashboardMain/>

        </div>
        
    </div>
    </div>

    </ProtectedRoute>
  )
}

export default page
