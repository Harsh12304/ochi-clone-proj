import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className='font-["Neue Montreal"] text-[3vw] leading-[4.5vw] tracking-tight '>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] border-#a1b562 mt-20 '>
            <div className="w-1/2">
                <h1 className='text-7xl mt-10'>Our approach: </h1>
                <button className='px-10 py-6 gap-10 flex  items-center bg-zinc-900 mt-10 rounded-full text-white '>READ MORE
                    <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
                <div className='w-1/2 h-[70vh] mt-5 bg-[#a0b84b] rounded-3xl overflow-hidden '>
                  <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt=""  />
                </div>
        </div>
    </div>
  )
}

export default About