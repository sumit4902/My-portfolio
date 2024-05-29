import React from 'react'
export default function ProjectDemo(props) {
  return (
    <>
        <div className=" w-[100%] min-h-screen  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0f1a3ef8] to-[#0c3331f3]">
            <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1350px]  ">
         
             {/* Projects Details */}
          <div className="    ">
                <div className="ipadmini:p-20 p-5   ">
                   
                    <div className=" ">
                    {/* <video controls src="/Videos/2024-05-22 22-50-16.mkv" className='w-full h-full border-2 shadow-md shadow-gray-100 rounded  bg-black'></video>
                     */}
                     {/* // eslint-disable-next-line */}
                     <iframe src={props.videopath}  height="480" allow="autoplay" className='border-2 shadow-md shadow-gray-100 rounded  w-[100%]'  title="project videos"></iframe>
                     </div>
                        <div className=" flex justify-between items-center px-5 py-4">
                            <span className=" text-white flex flex-col justify-center items-center gap-y-2">
                                <span className="border p-1 rounded">TECHSTACK</span>
                                 <span className="">{props.techstack}</span>
                                </span>
                            <a href={props.livelink} target="/" className=" cursor-pointer border px-3 py-2 min-w-[120px] rounded active:scale-[1.05] text-white font-medium">Live Preview</a>
                        </div>
                       {/* Features */}
                       <div className="font-medium text-lg text-white border-t">
                       Features
                       </div>
                       <div className="text-white p-2">
                        {props.features}
                       </div>


                    <div className=" font-medium text-lg text-white border-t">
                        PURPOSE
                    </div>
                    <div className="text-white py-3">{props.purpose}</div>


                </div>
          </div>
    </div>
    </div>
    </>
  )
}