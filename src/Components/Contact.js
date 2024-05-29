import React from 'react'
import contmenillus from './contactmenillus.png'
import menillus from './menillus.png'
import spring from './spring.webp'
export default function Contact() {
  return (
    <>

<div className=" w-[100%] ">
             <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]  ">
          {/* freelance */}
          <div className="relative  border pt-24 pb-32 mt-3 mb-24 laptop:mx-36  bg-gradient-to-bl from-[#e9f0ecd9] to-[#ebc58cb6] rounded-sm">
            
            <img src={spring} alt="" className="absolute right-0 top-[-1rem]  rotate-90 h-34 w-32  " />
            
             <div className="flex flex-col justify-center items-center  ">
             <div className=" text-5xl font-semibold">I'm Available For</div>
             <div className="text-5xl font-semibold ">Freelance work</div>
             <a href='https://www.linkedin.com/in/sumit-patel-25223a234' target="/" className=" py-3 px-10 font-semibold mt-10 rounded-full bg-pink-900 text-white shadow-lg shadow-red-100 active:scale-[1.09]">Hire me Now</a>
             </div>
              
             <img src={menillus} alt="" className="absolute bottom-[-5rem] left-0 ipadmini:h-72  h-64  ipadmini:w-80 w-72  " />
            
            
           </div>


            </div>
     </div>


     <div className=" w-[100%] ">
            <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]  ">
              
              
            <div className=" flex ipadmini:flex-row flex-col  rounded-lg shadow-lg shadow-slate-300   laptop:mx-20 mb-24 bg-slate-700 ">
                <div className=" relative ipadmini:w-1/2 w-full  p-10 hidden ipadmini:block">
                  
                    <div className=" text-center text-2xl text-white">Hi Let's have a quick chat</div>
                    <div className=" text-center text-white">Reply with in 2 days</div>
                    <img src={contmenillus} alt="" className="absolute bottom-[-5rem] left-1" />
                    
                </div>
                <div className=" ipadmini:w-1/2 w-full   p-5">
                    <div className="text-end text-5xl pe-36 text-white">Contact</div>
                    <div className=" text-5xl pe-24 flex flex-row justify-end items-center"><div className='h-2 w-28 rounded-full bg-rose-500'></div><div className="text-white">Me</div></div>
                    <br />
                    <form className=" flex flex-col gap-y-4 justify-center items-center" onSubmit={'/'}>
                        <input type="text" className=" border py-3 px-2 w-80 focus:outline-none rounded-md shadow-sm placeholder-rose-700" placeholder='Your Name'/>
                        <input type="text" className=" border py-3 px-2 w-80 focus:outline-none rounded-md shadow-sm placeholder-rose-700" placeholder='Your email'/>
                        <textarea type="text" className=" border py-2 px-2 w-80 min-h-28 focus:outline-none rounded-md shadow-sm placeholder-rose-700" placeholder='Your Message Here'/>
                        <button className=" py-2 px-10 font-medium rounded-full bg-pink-700 text-white shadow-md active:scale-[1.08] ">Send</button>
                    </form>
                </div>

                
            </div>   
              
    </div>
    </div>
      
    </>
  )
}
