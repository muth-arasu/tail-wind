import React from 'react'
import Slider from 'react-slick';

//Components
import Poster from '../Components/Poster/Poster.Component';
//Configs
import PosterCarouselSettings from '../config/PosterCarousel.Config';



const PosterSlider = (props) => {
    return (
        <>
            <div className='flex flex-col gap-3'>

                <div className='flex flex-col items-start '>
                    <h3 className="text-xl font-bold text-white">{props.title}</h3>
                    <p className="text-white" >{props.sub}</p>
                </div>
                <Slider {...PosterCarouselSettings} >
                    {
                        props.images.map((image,index) => {
                            return (
                                <>
                                    <Poster {...image} isDark={props.isDark } key={image.index} />
                                </>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}

export default PosterSlider
