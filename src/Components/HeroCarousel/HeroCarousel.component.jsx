import React from "react";
import HeroSlider from 'react-slick'
import axios from 'axios'
import { NextArrow,PrevArrow } from "./Arrow.component";
import { useState } from "react";
import { useEffect } from "react";
import tmdb from "../Api/tmdb";



const HeroCarousel = () =>{

    const [images,setImages]=useState([])

    useEffect( ()=>{
        //async
        const resGetAllImages=async()=>{
            const getImages = await tmdb.get('/movie/now_playing')
        setImages(getImages.data.results)
        }
        resGetAllImages()
    },[])

    const settingsLG={
        arrows:true,
        centerMode:true,
        centerPadding:"100px",
        slidesToShow: 3,
        infinite: true,
        speed: 100,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    }
    const settings = {
        arrows:true,
        centerPadding:"200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };
      return(
        <>
            <div className="lg:hidden">
            <HeroSlider {...settings}>
            {images.map((image,index)=>{
                return( <>
                <div className="w-full h-56 md:h-80 rounded-md py-3" key={index}>
                    <img src={`https://www.themoviedb.org/t/p/original${image.backdrop_path}`} alt={`testing ${index+1}`} className="w-full h-full  "/>
                </div> </>)
            })}
         </HeroSlider>
            </div>
            <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
            {images.map((image,index)=>{
                return( <>
                <div className="w-200 h-96 rounded-md px-2 py-3"key={index}>
                    <img src={`https://www.themoviedb.org/t/p/original${image.backdrop_path}`} alt={`testing ${index+1}`} className="w-full h-full rounded-md"/>
                </div> </>)
            })}
         </HeroSlider>

            </div>

        </>
      );

}
export default HeroCarousel
