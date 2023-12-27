import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { FaStar } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
//component
import PaymentModel from '../PaymentModel/Payment.Component';

//movie context
import { useContext } from 'react'
import { MovieContext } from '../../Context/movie.context'
import { useState } from 'react';

const MovieContent = () => {
  const {movie}=useContext(MovieContext)
  const genres = movie.genres?.map(({name})=>name).join(", ")
  const [isOpen,setIsOpen]=useState(false)
  const [price,setPrice]=useState(false)

  const bookTickets =()=>{
    setIsOpen(true)
    setPrice(199)
  }

  return (
    <>
      <PaymentModel isOpen={isOpen} setIsOpen={setIsOpen} price={price} />

      <div className='lg:w-auto lg:flex lg:flex-col  lg:gap-3 lg:items-left px-6 -mt-12 flex flex-col gap-3 items-center ' >
      <div><h1 className='lg:text-4xl text-3xl text-white font-bold'>{movie.title}</h1></div>
      <div className='flex items-center gap-3 '>
        <span className='w-6 h-42'><FaStar className='colored-icon w-full h-full' /></span>
        <h2 className='text-2xl text-white font-medium'>{((movie.vote_average/1).toFixed(1))}/10</h2>
        <div className='flex items-center text-white  '>
          <p className='text-xl '>{((movie.vote_count/1000).toFixed(1))}K</p>
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
        <span className='bg-white text-xl px-1 rounded-sm'>4K</span>
        <span className='bg-white text-xl px-1 rounded-sm'>{movie.original_language}</span>
      </div>
      <div className='lg:flex lg:items-center text-white lg:text-xl sm:text-xs'>
        <p className='tex-xl'>&bull;{((movie.runtime/60).toFixed(2))} h  &bull;{`${genres}`} &bull;UA <br className='lg:hidden sm:block' />&bull;{movie.release_date}</p>
      </div>
      <div >
          <button onClick={bookTickets} className='bg-pink-300 w-64 h-12 px-16 py-2 text-justify text-xl font-bold text-white rounded-md'>Book Tickets</button>
      </div>
      </div>
    </>
  )
}

export default MovieContent

