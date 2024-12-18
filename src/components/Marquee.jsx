import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.6" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] '>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap pr-20 '>
            <motion.h1 initial={{x:0}} animate={{x:" -100%"}} transition={{repeate: Infinity, ease:"linear", duration:10}} className='text-[17vw] leading-none font-["Founders Grotesk"] uppercase pt-5 -mb-15 font-semibold '> we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:" -100%"}} transition={{repeate: Infinity, ease:"linear", duration:10}} className='text-[17vw] leading-none font-["Founders Grotesk"] uppercase pt-5 -mb-15 font-semibold '> we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:" -100%"}} transition={{repeate: Infinity, ease:"linear", duration:10}} className='text-[17vw] leading-none font-["Founders Grotesk"] uppercase pt-5 -mb-15 font-semibold '> we are ochi</motion.h1>
        </div>
    </div>
)}
export default Marquee;