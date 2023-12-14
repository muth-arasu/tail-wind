import React, { useEffect, useState } from "react";
import axios from "axios";

//components
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCard.Components'
import PosterSlider from "../PosterSlider/PosterSlider.Component";


//configs
import PremierImages from "../config/TempImages.Config";
import EntertainmentImages from "../config/EntertainmentCarouselSettings";
import EntertainmentEventImages from "../config/EntertainmentEventImages";
import tmdb from "../Components/Api/tmdb";
import { useParams } from "react-router-dom";





const Home = () => {
    const [popularMovies,setPopulerMovies]=useState([])
    const [topMovies,setTopMovies]=useState([])
    const [upComming,setUpComming]=useState([])
    const [rocommendedMovies,setRocommendedMovies]=useState([])
    const{id}=useParams()


    useEffect(()=>{
        const res = async ()=>{
            const getPopularMovies=await tmdb.get('/movie/popular')
            // console.log(getPopularMovies)
            setPopulerMovies(getPopularMovies.data.results)
        }
        res()
    },[])
    useEffect(()=>{
        const res = async ()=>{
            const getTopMovies=await tmdb.get('/movie/top_rated')
            // console.log(getTopMovies)
            setTopMovies(getTopMovies.data.results)
        }
        res()
    },[])
    useEffect(()=>{
        const res = async ()=>{
            const getUpCommingMovies=await tmdb.get('/movie/upcoming')
            // console.log(getUpCommingMovies)
            setUpComming(getUpCommingMovies.data.results)
        }
        res()
    },[])
    useEffect(()=>{
        const res = async ()=>{
            const getRocommendedMovies=await tmdb.get(`movie/${id}/recommendations`)
            // console.log(getTvList)
            setRocommendedMovies(getRocommendedMovies.data.results)
        }
        res()
    },[])
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="container mx-auto px-4 py-2">
                <h1 className="text-2xl font-bold text-gray my-3">Recommended movies</h1>
                    <PosterSlider images={topMovies} title="Recommended movies" isDark={false} />
                </div>
                <div className="container mx-auto px-4">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
                        alt="adv" className="w-full h-full" />
                </div>
                <div className='container mx-auto px-4 '>
                    <h1 className="text-2xl font-bold text-gray my-3">Entertainment Events</h1>
                    <EntertainmentCardSlider images={EntertainmentEventImages} />
                </div>

                <div className="bg-premier-800 py-12 flex flex-col gap-3 items-center ">
                    <div className="container max-auto px-4 ">
                        <div className="hidden md:flex">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
                                alt="premier"
                                className="w-full h-full" />
                        </div>
                        <PosterSlider images={upComming} title="Premiers" sub="Brand new reelased every friday" isDark={true} />
                    </div>
                </div>
                <div className="container mx-auto px-4 py-2">
                    <PosterSlider images={popularMovies} title="Online Streaming Events" isDark={false} />
                </div>
                <div className="container mx-auto px-4 py-2">
                    <PosterSlider images={rocommendedMovies} title="Online Streaming Events" isDark={false} />
                </div>

            </div>
        </>
    )
}
export default Home;
