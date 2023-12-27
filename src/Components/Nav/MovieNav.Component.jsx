import React from 'react'
import { BsChevronRight } from "react-icons/bs";
import { BiChevronDown, BiChevronRight, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { useContext } from 'react';
import {MovieContext }from '../../Context/movie.context';
import images from '../../assets';



const NavSm = () => {
    const {movie}=useContext(MovieContext)
    return (
        <>
            <div className='text-white flex items-center justify-between'>
                <div >
                    <h3 className='text-xl font-bold'>{ movie.original_title }</h3>
                </div>
                <div className='w-8 h-8'>
                    <BiShareAlt className='w-full h-full' />
                </div>

            </div>
        </>
    )
}

const NavLg = () => {
    return (
        <>
            <div className='container mx-auto px-4 flex items-center justify-between'>
                <div className='flex items-center w-3/5 gap-3'>
                    <div className='w-24 h-12 '>
                        <img src={images.logo}
                            alt="website logo" className='w-full h-full rounded' />
                    </div>
                    <div className='w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md'>
                        <BiSearch className='w-6 h-6' />
                        <input type="search" className='w-full bg-transparent border-none focus:outline-none '
                            placeholder='Search for Movies, Event, Plays, Sports and Activities' />
                    </div>
                </div>
                <div className='flex item-center gap-3' >
                    <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-white'>Coimbatore  <BiChevronDown /></span>
                    <button className='bg-red-500 text-white px-2 py-1 text-sm rounded' >Sign In</button>
                    <div className='w-8 h-8'><BiMenu className='w-full h-full'/></div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}



function MovieNavbar() {
    return (
        <>
            <nav className=' absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-grayss-700 p-4'>
                <div className='md:hidden p-4'>{/* Mobile Device */}
                    <NavSm />
                </div>
                <div className='hidden md:block lg:hidden '>
                    {/* Tablet Device */}
                    <NavSm />
                </div>
                <div className='hidden lg:flex'>
                    {/* Large Device */}
                    <NavLg />
                </div>
            </nav>
        </>
    );
}

export default MovieNavbar
