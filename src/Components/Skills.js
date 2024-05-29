import React, { useState } from 'react'
import reactimg from './reactimage.png'
import js from './JSlogo.png'
import html from './htmllogo.png'
import csslogo from './CSSlogo.png'
import bootstraplogo from './bootstraplogo.webp'
import tailwind from './tailwindlogo.png'
import javalogo from'./javalogo.png'
import springbootlogo from './springboot.png'
import micrologo from './microservicesimage.png'
import sqllogo from './mysqlogo.png' 
import gitlogo from './gitlogo.png' 
import github from './githublogo.png'
import docker from './dockerLogo.png'
import awslogo from './awsLogo.png'
import cpp from './c++logo.png'
import lnct from './LNCTimage.jpg'

export default function Skills() {
  const[navvalue,setNavvalue]=useState(0);
  return (
    <>
     <div className=" w-[100%] ">
            <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1350px] ">
              
              <div className="  laptop:mx-40 my-10 bg-[#588983f8] py-2">
                <div className=" border-1 flex flex-row justify-end">
                   <img src="" alt="" className="h-10 w-10 border" />
                </div>
                {/* nav */}
                <div className=" border flex  flex-row justify-between items-center rounded-full p-2  shadow-zinc-300 shadow-inner  ipadmini:mx-20 mx-2  bg-gradient-to-r from-[#1d5e57f8] to-[#35639ff8]">
                 <button onClick={()=>setNavvalue(1)} className={` ipadmini:px-10 px-2 py-2 border font-medium rounded-full   ${navvalue===1?"bg-cyan-950 text-zinc-100":"bg-slate-400"}  active:scale-[1.07]`}>Biography</button>
                 <button onClick={()=>setNavvalue(0)} className={` ipadmini:px-10  py-2 px-8 border font-medium rounded-full  ${navvalue===0?" bg-cyan-950 text-zinc-100":"bg-slate-400"}  active:scale-[1.07]`}>Skills   </button>
                 <button onClick={()=>setNavvalue(2)} className={` ipadmini:px-10 px-2 py-2 border font-medium rounded-full   ${navvalue===2?"bg-cyan-950 text-zinc-100":"bg-slate-400"} active:scale-[1.07]`}>Eduacation</button>
                 </div>
                {/* Biodata Grid  */}
                <div className={`${navvalue===1?"":"hidden"} text-[#feebd3f8] m-2  rounded-md  grid ipadmini:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4 p-10  grid-flow-row bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2c4649f3] to-[#06337682]`}>
 
                  <div className="border-b flex flex-row justify-between items-center">
                    <span className="">Name</span>
                    <span className="">Sumit Patel</span>
                  </div>
                  <div className="border-b flex flex-row justify-between items-center">
                    <span className="">Birthday</span>
                    <span className="">15 April</span>
                  </div>
                  <div className="border-b flex flex-row justify-between items-center">
                    <span className="">Age</span>
                    <span className="">21</span>
                  </div>
                  <div className="border-b flex flex-row justify-between items-center">
                    <span className="">Address</span>
                    <span className="">Bhopal Madhya Pradesh India</span>
                  </div>
                  <div className="border-b flex flex-row justify-between items-center">
                    <span className="">Email</span>
                    <span className="">sumitpatel28855@gmial.com</span>
                  </div>
                 
                  <div className="border-b flex flex-row justify-between items-center">
                    <span className="">Phone</span>
                    <span className="">6263944902</span>
                  </div>
                 
                
                </div>

                {/*  Skills Grid  */}
                <div className={`${navvalue===0?"":"hidden"} grid grid-cols-3 ipadmini:grid-cols-5   gap-y-5 grid-flow-row  ipadmini:p-10 p-2 place-items-center `}>
                   
                  <div className=" rounded bg-[#fafcfcf9] ">
                    <img src={reactimg} alt="" className="w-28 h-24  animate-spin" />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">Reactjs</div>
                  </div>
                  <div className="rounded shadow-md bg-[#fafcfcf9] ">
                    <img src={js} alt="" className="w-28 h-24  " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">javascript</div>
                  </div>
                  <div className=" rounded shadow-md bg-[#fafcfcf9] ">
                    <img src={springbootlogo} alt="" className="w-28 h-24 " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">Springboot</div>
                  </div>
                  <div className=" rounded shadow-md bg-[#fafcfcf9] ">
                    <img src={javalogo} alt="" className="w-28 h-24  " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">Java</div>
                  </div>
                  <div className=" rounded shadow-md bg-[#fafcfcf9] ">
                    <img src={cpp} alt="" className="w-28 h-24 " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">C++</div>
                  </div>
                  <div className=" rounded shadow-md bg-[#fafcfcf9] ">
                    <img src={html} alt="" className="w-28 h-24 " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">Html</div>
                  </div>
                  <div className=" rounded shadow-md bg-[#fafcfcf9] ">
                    <img src={csslogo} alt="" className="w-28 h-24 " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">CSS</div>
                  </div>
                  <div className=" rounded shadow-md bg-[#fafcfcf9] ">
                    <img src={bootstraplogo} alt="" className="w-28 h-24  " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">BootStrap</div>
                  </div>
                  <div className=" rounded shadow-md bg-[#fafcfcf9] ">
                    <img src={tailwind} alt="" className="w-28 h-24 " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">Tailwind CSS</div>
                  </div>
                 
                  
                  <div className=" rounded shadow-md bg-[#fafcfcf9] ">
                    <img src={micrologo} alt="" className="w-28 h-24 " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">Microservices</div>
                  </div>
                  <div className=" rounded shadow-md bg-[#fafcfcf9] ">
                    <img src={sqllogo} alt="" className="w-28 h-24 " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">SQL</div>
                  </div>
                  <div className=" rounded shadow-md bg-[#fafcfcf9] ">
                    <img src={gitlogo} alt="" className="w-28 h-24 " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">Git</div>
                  </div>
                  <div className=" rounded shadow-md bg-[#fafcfcf9]">
                    <img src={github} alt="" className="w-28 h-24 " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">github</div>
                  </div>
                  <div className=" rounded shadow-md bg-[#fafcfcf9]">
                    <img src={docker} alt="" className="w-28 h-24  " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">Docker</div>
                  </div>
                  <div className=" rounded shadow-md  bg-[#fafcfcf9] ">
                    <img src={awslogo} alt="" className="w-28 h-24 " />
                    <div className="rounded-b text-white text-center p-1 bg-[#344c51f9]">AWS</div>
                  </div>

                </div>

             
          
              {/* Education */}
              <div className={`${navvalue===2?"":"hidden"} grid    grid-cols-1 gap-4  place-items-center ipadmini:p-10 p-3`}>

              <div className=" flex  ipadmini:flex-row flex-col w-full p-2 rounded  bg-gradient-to-bl from-[#e9f0ecd9] to-[#ecca5bb6] hover:shadow-xl hover:shadow-sky-950 transition-all">
                     <img src={lnct } alt="" className=" h-44 ipadmini:max-w-60 w-full  rounded-md" />
                    <div className=" flex flex-col   gap-y-2 ps-4 ">
                      <span className="text-lg font-medium">Bachelor of Technology in Computer Science with Specialization Cyber Security</span>
                      <span className=" text-gray-800">Lakshmi Narain College of Technology & Science Bhopal Madhya Pradesh</span>
                      <span className=" text-lg text-green-800 font-semibold">2021-2025 | CGPA : 8.45</span>
                    </div>
                </div>
                
                <div className=" flex  ipadmini:flex-row flex-col w-full p-2 rounded  bg-gradient-to-bl from-[#e9f0ecd9] to-[#ecca5bb6] hover:shadow-xl hover:shadow-sky-950 transition-all">
                     <img src={lnct } alt="" className=" h-44 ipadmini:max-w-60 w-full bg-neutral-200 rounded-md" />
                    <div className=" flex flex-col   gap-y-2 ps-4">
                      <span className="text-lg font-medium">12th Higher Secondry Education </span>
                      <span className=" text-gray-800">Bareli Vidhya Madir Higher Secondry School Madhya Pradesh</span>
                      <span className=" text-lg text-green-800 font-semibold">2019-2021 | Percentage:8.4</span>
                    </div>
                </div>
                <div className=" flex  ipadmini:flex-row flex-col w-full p-2 rounded  bg-gradient-to-bl from-[#e9f0ecd9] to-[#ecca5bb6] hover:shadow-xl hover:shadow-sky-950 transition-all">
                     <img src={lnct } alt="" className=" h-44 ipadmini:max-w-60 w-full bg-neutral-200 rounded-md" />
                    <div className=" flex flex-col   gap-y-2 ps-4">
                      <span className="text-lg font-medium">10th Higher Education </span>
                      <span className=" text-gray-800">Vidhya Niketan High School Bareli Madhya Pradesh</span>
                      <span className=" text-lg text-green-800 font-semibold">2013-2019 | Percentage:8.6</span>
                    </div>
                </div>

              </div>

              
              </div>
          
            </div>
    </div>

   
    </>
  )
}
