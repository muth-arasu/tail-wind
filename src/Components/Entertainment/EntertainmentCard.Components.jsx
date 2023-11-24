import React from 'react'
import Slider from 'react-slick'
//configs
import EntertainmentCarouselSettings from '../../config/EntertainmentCarouselSettings'


const EntertainmentCard =(props)=>{
    return (
    <>
    <div className='w-full h-24   px-2 py-2 rounded-sm overflow-hidden md:h-64 md:rounded-xl'>
        <img src={props.src} alt="entertainment image" className='w-full h-full rounded-xl' />
    </div>
    </>
)}



const EntertainmentCardSlider=(props)=>{
    
    const settings ={
        infinity :false,
        autoply:false,
        slidesToShow:5,
        slidesToScroll:4,
        intialSlide:1,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:2,
                    infinite:true,
                }
            },
            {  breakpoint:768,  
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:1
                }
            },
            {  breakpoint:480,  
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    initialSlide:1
                }
            },

        ]

    }
    return(
        <>
            
           <div className='container mx-auto px-4'>
           <Slider {...settings}>
                {
                   props.images.map((image,index)=>{
                    return(
                        <>
                            <EntertainmentCard src={image} key={index}/>
                        </>
                    )
                    })
                }
            </Slider>

           </div>

            
           
        </>
    )
}
export default EntertainmentCardSlider