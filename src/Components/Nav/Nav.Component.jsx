import React from 'react'
import { BsChevronRight } from "react-icons/bs";
import { BiChevronDown, BiChevronRight, BiMenu, BiSearch } from "react-icons/bi";
import images from '../../assets';




const NavSm = () => {
    return (
        <>
            <div className='text-white flex items-center justify-between'>
                <div >
                    <h3 className='text-xl font-bold'>Its All Starts Here!</h3>

                    <span className='text-gray-400 text-xs flex items-center'>Chennai  <BiChevronRight /></span>
                </div>
                <div className='w-8 h-8'>
                    <BiSearch className='w-full h-full' />
                </div>

            </div>
        </>
    )
}
const NavMd = () => {
    return (
        <>
            <div className='w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md'>
                <BiSearch className='w-6 h-6' />
                <input type="search" className='w-full bg-transparent border-none focus:outline-none '
                    placeholder='Search for Movies, Event, Plays, Sports and Activities' />
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
                        <img src={images.logo} alt="website logo" className='w-full h-full rounded' />
                    </div>
                    <div className='w-full flex itpems-center gap-3 bg-white px-3 py-2 rounded-md'>
                        <BiSearch className='w-6 h-6' />
                        <input type="search" className='w-full bg-transparent border-none focus:outline-none '
                            placeholder='Search for Movies, Event, Plays, Sports and Activities' />
                    </div>
                </div>
                <div className='flex item-center gap-3' >
                    <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-white'>Chennai  <BiChevronDown /></span>
                    <button className='bg-red-500 text-white px-2 py-1 text-sm rounded' >Sign In</button>
                    <div className='w-8 h-8'><BiMenu className='w-full h-full'/></div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}



function NavComponent() {
    return (
        <>
            <nav className='bg-grayss-700 p-4'>
                <div className='md:hidden p-4'>{/* Mobile Device */}
                    <NavSm />
                </div>
                <div className='hidden md:flex lg:hidden '>
                    {/* Tablet Device */}
                    <NavMd />
                </div>
                <div className='hidden lg:flex'>
                    {/* Large Device */}
                    <NavLg />
                </div>
            </nav>
        </>
    );
}

export default NavComponent
