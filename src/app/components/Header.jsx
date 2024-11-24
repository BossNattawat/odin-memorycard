import React from 'react'
import Image from 'next/image'

function Header({ score, bestScore }) {
  return (
    <div className='flex justify-around py-7 items-center bg-[#ffffff] text-[#000000] shadow-2xl z-10'>
        <div className="flex items-center gap-7">
            <Image src="/Overwatch_2_logo.png" width={150} height={150} alt='Overwatch Icon'></Image>
            <div className="flex flex-col">
                <h1 className='text-4xl font-bold'>Overwatch 2 Memmory Cards</h1>
                <p className='text-xl'>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
        </div>

        <div className="flex flex-col justify-center">
            <p className='text-2xl font-semibold'>Best Score: {bestScore}</p>
            <p className='text-2xl font-semibold'>Score: {score}/12</p>
        </div>
    </div>
  )
}

export default Header