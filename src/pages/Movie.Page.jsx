import React from 'react'
import HeroMovie from '../Components/HeroMovie/HeroMovie.Components'
import { FaCcVisa } from 'react-icons/fa6'
import { IoLogoApple } from "react-icons/io5";
import CastCrew from '../Components/HeroMovie/Cast&Crew.Component';
import PosterSlider from '../PosterSlider/PosterSlider.Component';
import PremierImages from '../config/TempImages.Config';
//context
import { useContext } from 'react'
import { MovieContext } from '../Context/movie.context';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import tmdb from '../Components/Api/tmdb';
import Slider from 'react-slick';




const Movie = () => {
  const { movie } = useContext(MovieContext)
  const { id } = useParams()
  const [cast, setCast] = useState([])
  const [crew, setCrew] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const [recommendedMovies, setRecommendedMovies] = useState([])

  useEffect(() => {
    const resGetAllCast = async () => {
      const getAllCast = await tmdb.get(`/person/${id}/movie_credits`)
      console.log(getAllCast);
      setCast(getAllCast.data.cast)

    }
    resGetAllCast()
  }, [id])


  useEffect(() => {
    const res = async () => {
      const getSimilarMovies = await tmdb.get(`/movie/${id}/similar`)
      // console.log(getSimilarMovies)
      setSimilarMovies(getSimilarMovies.data.results)
    }
    res()
  }, [id])
  useEffect(() => {
    const res = async () => {
      const getRecommendedMovies = await tmdb.get(`/movie/${id}/recommendations`)
      // console.log(getTopMovies)
      setRecommendedMovies(getRecommendedMovies.data.results)
    }
    res()
  },[id])


  const settings = {
    infinity: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    intialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1

        }
      },

    ]

  }
  const settingsCast = {
    infinity: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    intialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1

        }
      },

    ]

  }


  return (
    <>
      <div>
        <div>
          <HeroMovie />
        </div>
        <div className='container lg:px-32 px-6 mb-32'>
          <div className='my-8 '>
            <h1 className='text-2xl text-grayss-800 font-bold mb-8 '>About Movie</h1>
            <p className='text-xl text-grayss-900  '>{movie.overview}</p>
          </div>
          <div className='my-8' >
            <h1 className='text-2xl text-grayss-800 font-bold  mb-8  '>Payment type</h1>
          </div>
          <div className='my-8 flex flex-wrap  gap-3 '>
            <div className='bg-yellow-200 border border-yellow-400 border-dashed-5 flex gap-3 p-1 w-72 h-20'>
              <div className='w-16 h-8'>
                <FaCcVisa className='w-full h-full' />
              </div>
              <h3> For individuals traveling for leisure or visiting friends and family.</h3>
            </div>
            <div className='bg-yellow-200 border border-yellow-400 border-dashed-5 flex gap-3 p-1 w-72 h-20'>
              <div className='w-16 h-8'>
                <IoLogoApple className='w-full h-full' />
              </div>
              <h3> For individuals traveling for leisure or visiting friends and family.</h3>
            </div>

          </div>
          <div className='my-4'>
            <h1 className='text-2xl text-grayss-800 font-bold '>Cast</h1>
          </div>
          <Slider {...settingsCast}>
            {cast.map((castData) => {
              return (<>
                <CastCrew img={`https://www.themoviedb.org/t/p/original${castData.poster_path}`}
                  name={castData.title}
                  role={castData.character}
                />
              </>)


            })}
          </Slider>
          {/* 
          <div className='my-4'>
            <h1 className='text-2xl text-grayss-800 font-bold '>Crew</h1>
          </div>

          <Slider {...settingsCast}>
                 { cast.map((castData)=>{
                  return(<>
                  <CastCrew  img={`https://www.themoviedb.org/t/p/original${castData.poster_path}`}               
                              name={castData.title}
                               role={castData.character}
                                 />
                  </>)
                              
                         
                  })}
              </Slider> */}

          <div className='mt-6'>
            <h1 className='text-2xl text-grayss-800 font-bold '>You May Like</h1>
          </div>
          <div>
            <PosterSlider images={similarMovies} title="Online Streaming Events" isDark={false} config={settings} />
          </div>
          <div>
            <PosterSlider images={recommendedMovies} title="Online Streaming Events" isDark={false} config={settings} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie
