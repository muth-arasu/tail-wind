import React from "react";
import HeroSlider from 'react-slick'
import { NextArrow,PrevArrow } from "./Arrow.component";


const HeroCarousel = () =>{
    const settingsLG={
        arrows:true,
        centerMode:true,
        centerPadding:"100px",
        slidesToShow: 1,
        infinite: true,
        speed: 500,
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
    const images =[
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1698603955302_web.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1700717967337_oppenheimerweb.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1700146033284_webpage.jpg",
        
    ];
      return(
        <>
            <div className="lg:hidden">
            <HeroSlider {...settings}>
            {images.map((image,index)=>{
                return( <>
                <div className="w-full h-56 md:h-80 rounded-md py-3" key={index}>
                    <img src={image} alt={`testing ${index+1}`} className="w-full h-full  "/>
                </div> </>)
            })}
         </HeroSlider>
            </div>
            <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
            {images.map((image,index)=>{
                return( <>
                <div className="w-200 h-96 rounded-md px-2 py-3"key={index}>
                    <img src={image} alt={`testing ${index+1}`} className="w-full h-full rounded-md"/>
                </div> </>)
            })}
         </HeroSlider>

            </div>

        </>
      );

}
export default HeroCarousel
