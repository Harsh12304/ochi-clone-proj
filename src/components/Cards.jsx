import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center gap-5 px-32 '>
        <div className='cardcontaine h-[50vh] w-1/2  '>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute rounded-full px-5 py-1 border-2 border-[#7CAC5A] text-[#7CAC5A] left-10 bottom-10 '>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontaine h-[50vh] w-1/2 flex gap-5 relative'>
            <div className='card rounded-xl w-full h-full bg-[#142725] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute rounded-full px-5 py-1 border-2 border-[#7CAC5A] text-[#7CAC5A] left-10 bottom-10 '>Rating 5.0 on Clutch</button>

            </div>
            <div className='card rounded-xl w-full h-full bg-[#142725] relative flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute rounded-full px-5 py-1 border-2 border-[#7CAC5A] text-[#7CAC5A] left-10 bottom-10 '>Business Bootcamp Alumni</button>

            </div>
        </div>
    </div>
  )
}

export default Cards