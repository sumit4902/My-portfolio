import React from 'react'
import image from './pencil 1.png'
import pencilimage from './pencilrotate.png'
import { Link } from 'react-router-dom'
export default function Projects() {
  return (
    <>
     <div className=" w-[100%] ">
            <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1350px]  ">
    
      <div className="laptop:px-44 ipadmini:px-24 ipadmini:py-10 py-3  ">
        <div className="flex flex-row justify-between items-center p-4">  
            <div className=" flex flex-col justify-center relative ">
                <img src={pencilimage} alt="" className="absolute h-10 w-10 top-0 left-0 " />
                <span className="text-[#86f90af8] mt-2 ps-11">Recent work</span>
                <span className="ipadmini:text-lg font-medium ipadmini:max-w-60 max-w-48 text-[#feebd3f8]">Look at my portfolio and give me your feedback</span>
            </div>
            <div className="text-sm laptop:text-base text-center text-[#feebd3f8]">Scratch TO End  </div>
            <div className="text-sm laptop:text-base text-center text-[#feebd3f8]">94 % positive Rating</div>
        </div>
        {/* grid */}
        <div className=" grid ipadmini:grid-cols-3 grid-cols-2 gap-4  p-3">
           
            <div className="group relative border overflow-hidden shadow-lg shadow-[#0f1d1bf8] border-sky-700  ">
                <img src="/cyberknightcycure.jpg" alt="" className="h-48 w-full border-1 border-gray-600" />
                <div className="absolute border-t  w-full p-2 bottom-0 translate-y-36  group-hover:translate-y-0 transition duration-200 delay-75 ease-out bg-gradient-to-t from-teal-700 to-gray-900  ">
                    <div className=" text-center text-sm mb-3 text-stone-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, placeat?</div>
                    <div className="flex flex-row flex-wrap justify-around items-center">
                    <Link to='/cyberknightcycure' className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700  ">view</Link>
                    <button className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700 ">code</button>
                    </div>
                </div>
            </div>
            <div className="group relative border overflow-hidden shadow-lg shadow-[#0f1d1bf8] border-sky-700  ">
                <img src='/Screenshot (51).png' alt="" className="h-48 w-full border-1 border-gray-600" />
                <div className="absolute border-t  w-full p-2 bottom-0 translate-y-36  group-hover:translate-y-0 transition duration-200 delay-75 ease-out bg-gradient-to-t from-teal-700 to-gray-900  ">
                    <div className=" text-center text-sm mb-3 text-stone-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, placeat?</div>
                    <div className="flex flex-row flex-wrap justify-around items-center">
                    <Link to='/bytebond' className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700  ">view</Link>
                    <button className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700 ">code</button>
                    </div>
                </div>
            </div>
            <div className="group relative border overflow-hidden shadow-lg shadow-[#0f1d1bf8] border-sky-700  ">
                <img src="/Screenshot (50).png" alt="" className="h-48 w-full border-1 border-gray-600" />
                <div className="absolute border-t  w-full p-2 bottom-0 translate-y-36  group-hover:translate-y-0 transition duration-200 delay-75 ease-out bg-gradient-to-t from-teal-700 to-gray-900  ">
                    <div className=" text-center text-sm mb-3 text-stone-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, placeat?</div>
                    <div className="flex flex-row flex-wrap justify-around items-center">
                    <Link to='/cyber-guardians' className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700  ">view</Link>
                    <button className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700 ">code</button>
                    </div>
                </div>
            </div>

            <div className="group relative border overflow-hidden shadow-lg shadow-[#0f1d1bf8] border-sky-700  ">
                <img src={image} alt="" className="h-48 w-full border-1 border-gray-600" />
                <div className="absolute border-t  w-full p-2 bottom-0 translate-y-36  group-hover:translate-y-0 transition duration-200 delay-75 ease-out bg-gradient-to-t from-teal-700 to-gray-900  ">
                    <div className=" text-center text-sm mb-3 text-stone-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, placeat?</div>
                    <div className="flex flex-row flex-wrap justify-around items-center">
                    <button className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700  ">view</button>
                    <button className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700 ">code</button>
                    </div>
                </div>
            </div>
            <div className="group relative border overflow-hidden shadow-lg shadow-[#0f1d1bf8] border-sky-700  ">
                <img src={image} alt="" className="h-48 w-full border-1 border-gray-600" />
                <div className="absolute border-t  w-full p-2 bottom-0 translate-y-36  group-hover:translate-y-0 transition duration-200 delay-75 ease-out bg-gradient-to-t from-teal-700 to-gray-900  ">
                    <div className=" text-center text-sm mb-3 text-stone-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, placeat?</div>
                    <div className="flex flex-row flex-wrap justify-around items-center">
                    <button className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700  ">view</button>
                    <button className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700 ">code</button>
                    </div>
                </div>
            </div>

            <div className="group relative border overflow-hidden shadow-lg shadow-[#0f1d1bf8] border-sky-700  ">
                <img src={image} alt="" className="h-48 w-full border-1 border-gray-600" />
                <div className="absolute border-t  w-full p-2 bottom-0 translate-y-36  group-hover:translate-y-0 transition duration-200 delay-75 ease-out bg-gradient-to-t from-teal-700 to-gray-900  ">
                    <div className=" text-center text-sm mb-3 text-stone-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, placeat?</div>
                    <div className="flex flex-row flex-wrap justify-around items-center">
                    <button className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700  ">view</button>
                    <button className="  px-4 py-1 rounded active:scale-[1.09] bg-gray-800 text-stone-100 shadow-md  shadow-sky-700 ">code</button>
                    </div>
                </div>
            </div>

           
           
        </div>
      </div>


         

      </div>
    </div>

    
    </>
  )
}
