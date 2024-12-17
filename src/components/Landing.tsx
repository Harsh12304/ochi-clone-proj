import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUp } from "react-icons/fa6";

function Landing() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='texture mt-40 px-20'>
            {["We create", "eye-opening", "presentations"].map((item,index)=>{
                return <div className="masker">
                            <div className='w-fit flex items-center '>
                                {index === 1 && (<motion.div
                                 initial={{width:0}}
                                 animate={{width:"9vw"}}
                                 transition={{ease: [0.76,0,0.24,1],duration: 1}}
                                 
                                 className='mr-5 w-[9vw] rounded-md h-[5vw] -top[1.2vw] relative bg-green-400  '> </motion.div>)}
                                <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-["Founders Grotesk"] font-medium'>{item} </h1>
                            </div>  
                        </div>
            })}
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20 '>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=> 
            <p className='text-md font-light leading-none tracking-tight '>
                {item}
            </p> )}
            <div className='start flex items-center gap-4 '>
                <div className='py-2 px-5 border-[2px] border-zinc-500 rounded-full font-light text-sm uppercase '>Start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                    <span className='rotate-[45deg]'>
                        <FaArrowUp />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing