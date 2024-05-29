import React, { useState } from "react"


export default function Navbar(props)
{     // console.log(props.isLogin);
       const[toggle,Settoggle]=useState(false);
       
     
      
          
       
return(
 <>
 <nav>  
  <div className="flex flex-row  justify-between items-center py-2 px-10  bg-[#0e2827f3] text-white">
    <div className={` ${toggle?"invisible":""} p-2 text-2xl text-semibold italic`}>Sumit Patel</div>
    <div className="ipadmini:block hidden laptop:me-28 ">
        <span to='/' className="p-1 laptop:mx-5 mx-2"  >HOME</span>
        <span to='/Encryptiontool/AES' className="p-1 laptop:mx-5 mx-2">SKILLS</span>
        <span to='/Blog' className="p-1 laptop:mx-5 mx-2">PROJECTS</span>
        <span to='/Authapi' className="p-1 laptop:mx-5 mx-2">EDUCATION</span>
        <span to='/profile' className="p-1 laptop:mx-5 mx-2">ABOUT</span>
       
    </div>
    <div className="ipadmini:hidden" onClick={()=>{Settoggle(true)}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
       </svg>
    </div>
   
  </div>

  {/* mobile navbar */}
  <div className={`${toggle?"":"hidden"} fixed right-0 top-0 bottom-0 z-50 flex flex-col items-start  gap-y-3 w-72 py-4 px-4 bg-[#0c201f] `} >
        <div className=" flex w-full justify-between">
        <div className=" p-2 text-2xl text-white">SUMIT PATEL</div>
            <span className="mt-2 mb-2 me-4 text-white " onClick={()=>{Settoggle(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </span>
        </div>
       
        <span  onClick={()=>{Settoggle(false)}} className="px-5 py-2 text-lg border rounded-md shadow-sm w-full  bg-gradient-to-t from-[#051918f3] to-[#105654f3] text-white">HOME</span>
        <span  onClick={()=>{Settoggle(false)}} className="px-5 py-2 text-lg border rounded-md shadow-sm w-full  bg-gradient-to-t from-[#051918f3] to-[#105654f3] text-white">SKILLS</span>
        <span  onClick={()=>{Settoggle(false)}} className="px-5 py-2 text-lg border rounded-md shadow-sm w-full  bg-gradient-to-t from-[#051918f3] to-[#105654f3] text-white">PROJECTS</span>
        <span  onClick={()=>{Settoggle(false)}} className="px-5 py-2 text-lg border rounded-md shadow-sm w-full  bg-gradient-to-t from-[#051918f3] to-[#105654f3] text-white">EDUCATION</span>
        <span  onClick={()=>{Settoggle(false)}} className="px-5 py-2 text-lg border rounded-md shadow-sm w-full  bg-gradient-to-t from-[#051918f3] to-[#105654f3] text-white">ABOUT</span>
        
    </div>
  </nav>
 </>
    )
}

