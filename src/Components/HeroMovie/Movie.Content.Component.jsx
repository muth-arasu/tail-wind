import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { FaStar } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

const MovieContent = () => {
  return (
    <>
      <div className='lg:w-auto lg:flex lg:flex-col lg:gap-3 sm:flex flex-col gap-3 items-center' >
      <div><h1 className='lg:text-4xl text-3xl text-white font-bold'>Avegers EndGame</h1></div>
      <div className='flex items-center gap-3 '>
        <span className='w-6 h-42'><FaStar className='colored-icon w-full h-full' /></span>
        <h2 className='text-2xl text-white font-medium'>8.4/10</h2>
        <div className='flex items-center text-white  '>
          <p className='text-xl '>8.5K Votes</p>
          <span className='w-6 h-8 mr-5 txt-xl mt-1'><BiChevronRight className='text-grayss-400 w-full h-full' /></span>
        </div>

        <div></div>
      </div>
      <div className="hidden lg:block  md:hidden lg:bg-grayss-300 lg:w-auto lg:h-20 lg:flex lg:items-center lg:gap-12 lg:px-6 py-1 lg:rounded-xl " >
       <div>
       <h2 className='lg:text-xl lg:font-medium lg:text-white ' >Add your rating & review</h2>
        <p className='lg:text-md lg:text-grayss-100'>Your ratings matter </p>
       </div>
        <div>
          <button className='lg:bg-white lg:px-2 lg:py-1 lg:rounded-md lg:text-xl lg:font-medium lg:text-black-600 '>Rate Now</button>
        </div>
      </div>
      <div className='flex gap-3'>
        <span className='bg-white text-xl px-1 rounded-sm'>HD</span>
        <span className='bg-white text-xl px-1 rounded-sm'>Hindi</span>
      </div>
      <div className='lg:flex lg:items-center text-white lg:text-xl sm:text-xs'>
        <p className='tex-xl'>&bull; 1.54m  &bull;Drama, Thriller &bull;UA <br className='lg:hidden sm:block' />&bull;20 Nov, 2023</p>
      </div>
      <div >
          <button className='bg-pink-300 w-64 h-12 px-3 py-2 text-center text-xl font-bold text-white sm:flex'>Book Tickets</button>
      </div>
      </div>
    </>
  )
}

export default MovieContent

