import React from 'react'
import Searchbar from '../components/Searchbar'
const page = () => {
  return (
    <>
   
   <Searchbar options={["Karachi", "Lahore", "Islamabad"]}
    searchingFor={["Doctor", "Lab", "Pharmacy"]} 
    showSecDropdown={true} 
    placeholder={"Search Doctor medicine or lab test"} 
    heading={"Find a Therapist   !آؤ بات کریں"}
     line1={"Project Yaqeen"} 
     line2={"is an initiative founded due to the flood devastation engulfing parts of Pakistan."}
     line3={"First responders, frontliners & relief workers are experiencing crisis & trauma as they provide aid for relief."} 
     line4={"As the first responder's operate under dire conditions their emotional wellbeing & mental presence is critical for effective functioning."} 
     line5={"We have formed an alliance to provide support to them, in the form of counselling."} 
     line6={"We hope to provide coping mechanisms and trauma-informed strategies to facilitate the frontliners."} 
     
     
     
     />
                             
    </>
  )
}

export default page