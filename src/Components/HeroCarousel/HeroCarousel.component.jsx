import React from "react";
import HeroSlider from 'react-slick'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCarousel = () =>{
    const settingsLG={
        arrows:true,
        centerMode:true,
        centerPadding:"300px",
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slidesToScroll: 1
    }
    const settings = {
        arrows:true,
        centerPadding:"200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const images =[
        "https://images.unsplash.com/photo-1498708024051-b1838ad1a1d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",        "https://images.unsplash.com/photo-1691573155562-bb83d1237f23?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1696879452233-3a7f91f7d3dc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/photo-1573719562323-c98b3af80848?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ];
      return(
        <>
            <div className="lg:hidden">
            <HeroSlider {...settings}>
            {images.map((image,index)=>{
                return( <>
                <div className="w-full h-56 md:h-80 rounded-md py-3" >
                    <img src={image} alt="testing" className="w-full h-full  "/>
                </div> </>)
            })}
         </HeroSlider>
            </div>
            <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
            {images.map((image,index)=>{
                return( <>
                <div className="w-200 h-96 rounded-md px-2 py-3" >
                    <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                </div> </>)
            })}
         </HeroSlider>

            </div>

        </>
      );

}
export default HeroCarousel
