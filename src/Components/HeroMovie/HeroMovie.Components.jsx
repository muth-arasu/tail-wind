import React from 'react'
import MovieContent from './Movie.Content.Component'
import { useContext } from 'react'
import { MovieContext } from '../../Context/movie.context'


const HeroMovie = () => {
    const {movie}=useContext(MovieContext)
    return (
        <>
            <div>
                {/* Mobile */}
                <div className='relative md:hidden w-full' style={{ height: "calc(180)" }}>
                    <div className='w-full absolute bg-black bg-opacity-50  Z-10 bottom-0'style={{ height: "calc(100vw)" }} >
                        <div className='py-16 '>
                        <MovieContent/>
                        </div>
                    </div>


                    <img src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
                        alt="spiderman" className="w-full h-fll" style={{ height: "calc(180vw)", objectFit: "fill" }} />
                </div>

                {/* Medium */}
                <div className='relative hidden md:block w-full lg:hidden' style={{ height: "calc(80vw)" }}>
                    <div className='w-full h-96 absolute bg-black bg-opacity-50  Z-10 bottom-0' >
                    <div className='ml-12 mt-6'>
                        <MovieContent/>
                        </div>
                        </div>
                    <img src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
                        alt="animation" className='w-full h-full' />
                </div>

                {/* Large */}
                <div className=' relative hidden w-full lg:block ' style={{ height: "32rem" }} >
                    <div className=' w-full h-full absolute z-10 opacity-75' style={{
                        backgroundImage: "linear-gradient(90deg, rgba(2,2,24,1) 8%, rgba(95,95,98,1) 47%, rgba(2,0,36,1) 84%)"
                    }} />
                    <div className='absolute z-30 mt-10 ml-32 flex items-center gap-6'>

                        <div className=' w-72 h-5/6 rounded-md ' >
                    <img src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
                                alt="Poster Image" className='w-full h-full rounded-md' />
                        </div>
                        <div className=''>
                        <MovieContent/>
                        </div>

                    </div>

                    <img src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`}
                        alt="Avenger" className='w-full h-full' />

                </div>
            </div>
        </>
    )
}

export default HeroMovie
