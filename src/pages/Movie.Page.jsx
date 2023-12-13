import React from 'react'
import HeroMovie from '../Components/HeroMovie/HeroMovie.Components'
import { FaCcVisa } from 'react-icons/fa6'
import { IoLogoApple } from "react-icons/io5";
import CastCrew from '../Components/HeroMovie/Cast&Crew.Component';
import PosterSlider from '../PosterSlider/PosterSlider.Component';
import PremierImages from '../config/TempImages.Config';




const Movie = () => {

  const settings ={
    infinity :false,
    speed:500,
    slidesToShow:4,
    slidesToScroll:2,
    intialSlide:0,
    responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToShow:4,
                slidesToScroll:2,
                infinite:true,
            }
        },
        {  breakpoint:768,  
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                initialSlide:2,
            
            }
        },
        {  breakpoint:480,  
            settings:{
                slidesToShow:2,
                slidesToScroll:1
               
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
            <p className='text-xl text-grayss-900  '>In "Avengers: Infinity War," the main antagonist, Thanos, seeks to obtain all six Infinity Stones to complete his gauntlet and achieve ultimate power.
              The Avengers, along with the Guardians of the Galaxy and other Marvel heroes, must unite to stop Thanos and prevent him from carrying out his destructive plan.
            </p>
          </div>
          <div className='my-8' >
          <h1 className='text-2xl text-grayss-800 font-bold  mb-8  '>Payment type</h1>
          </div>
          <div  className='my-8 flex flex-wrap  gap-3 '>         
            <div className='bg-yellow-200 border border-yellow-400 border-dashed-5 flex gap-3 p-1 w-72 h-20'>
              <div className='w-16 h-8'>
              <FaCcVisa className='w-full h-full'/>
              </div>
              <h3> For individuals traveling for leisure or visiting friends and family.</h3>
            </div>
            <div className='bg-yellow-200 border border-yellow-400 border-dashed-5 flex gap-3 p-1 w-72 h-20'>
              <div className='w-16 h-8'>
              <IoLogoApple className='w-full h-full'/>
              </div>
              <h3> For individuals traveling for leisure or visiting friends and family.</h3>
            </div>
            
          </div>
          <div className='my-4'>
            <h1 className='text-2xl text-grayss-800 font-bold '>Cast</h1>
          </div>
          <div className='flex flex-wrap gap-3'>
          <CastCrew img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/alizeh-agnihotri-2031097-1695714207.jpg"
               name= "Alizeh"
                role="as Niyati"
                  />
          <CastCrew img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sahil-mehta-23671-1695889964.jpg"
               name= "Juhi Babbar"
                role="as Renuka Singh"
                  />
          <CastCrew img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sahil-mehta-23671-1695889964.jpg"
               name= "Sahil Mehta"
                role="as Aakash"
                  />
          <CastCrew img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/zeyn-shaw-2032392-1700733771.jpg"
               name= "zeyhen shaw"
                role="as actor"
                  />
          <CastCrew img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/juhi-babbar-32440-1663752914.jpg"
               name= "juhi Babbar"
                role="as Renuka singh"
                  />
          </div>
          <div className='my-4'>
            <h1 className='text-2xl text-grayss-800 font-bold '>Crew</h1>
          </div>
          <div className='flex flex-wrap gap-3'>
          <CastCrew img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/soumendra-padhi-1071221-24-03-2017-13-14-38.jpg"
               name= "Sounmendra"
                role="as Director"
                  />
          <CastCrew img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/atul-agnihotri-4995-1700733028.jpg"
               name= "Atul Agnigothri"
                role="as Producer"
                  />
          <CastCrew img="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/naveen-yerneni-1261037-1654492034.jpg"
               name= "Naveen Ernani"
                role="as Producer"
                  />
          </div>
          <div className='mt-6'>
            <h1 className='text-2xl text-grayss-800 font-bold '>You May Like</h1>
          </div>
          <div>
          <PosterSlider images={PremierImages} title="Online Streaming Events" isDark={false} config={settings} />
          </div>
          <div>
          <PosterSlider images={PremierImages} title="Online Streaming Events" isDark={false} config={settings} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie
