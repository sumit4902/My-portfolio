import React from 'react'
import image1 from './pencil 1.png'
import spring from './spring.webp'
export default function Do() {
  return (
     <>
         <div className=" w-[100%]   ">
            <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1350px]  ">
            
            <div className="ipadmini:p-10 py-5 laptop:px-20 relative">
                <div className="text-center font-medium text-lg text-zinc-50">My EXPERTISE</div>
                <div className="text-center mt-4 text-zinc-50 ">WHAT I DO</div>
                <div className=" grid ipadmini:grid-cols-3 grid-cols-1 gap-8  p-10">
                    <div className=" border  border-sky-700 hover:shadow-zinc-400 shadow-lg shadow-cyan-950  bg-gradient-to-t from-gray-800 to-[#263874f8]  p-4">
                        <img src={image1} alt="" className='h-10 w-10 mb-10'/>
                         <span className="font-medium text-lg text-white">Frontend Development</span>
                         <div className="mt-3 text-sm text-stone-100">As a dedicated frontend developer, I excel in creating intuitive and visually appealing user interfaces. Proficient in HTML, CSS, JavaScript, and framework like React , I deliver responsive, accessible, and high-performing web applications that enhance user experience. I am committed to innovative, user-centric design solutions.</div>
                    </div>
                    <div className="border  border-sky-700 hover:shadow-zinc-400 shadow-lg shadow-cyan-950  bg-gradient-to-t from-gray-800 to-[#263874f8]  p-4">
                        <img src={image1} alt="" className='h-10 w-10 mb-10' />
                         <span className="font-medium text-lg text-white">Backend Develoment</span>
                         <div className="mt-3 text-sm text-stone-100">Specializing in backend development with Spring Boot and Java, I build robust, scalable, and secure server-side applications. Proficient in RESTful APIs, MySQL, PostgreSQL, and microservices architecture, I write clean, efficient code. Dedicated to optimizing performance and seamless frontend integration, I stay updated with the latest Spring Boot advancements.</div>
                    </div>
                    <div className="border  border-sky-700 hover:shadow-zinc-400 shadow-lg shadow-cyan-950  bg-gradient-to-t from-gray-800 to-[#263874f8]   p-4">
                        <img src={image1} alt="" className='h-10 w-10 mb-10'/>
                         <span className="font-medium text-lg text-white">UI / UX Designing</span>
                         <div className="mt-3 text-sm text-stone-100">As a passionate UI/UX designer, I create engaging, user-friendly interfaces that enhance user experience. Specializing in user research, wireframing, and visual design, I balance functionality and aesthetics to deliver intuitive, appealing solutions. I stay current with design trends and best practices to meet user expectations.</div>
                    </div>
                </div>
                  <img src={spring} alt="" className="absolute bottom-6 right-6 h-20 w-20" />

            </div>
            </div>
        </div>
     </>
  )
}
