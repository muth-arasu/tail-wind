import React from 'react'
import NavComponent from '../Components/Nav/Nav.Component'
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.component'


const DefaultLayouts =(props)=>{
    


    return<>
        <NavComponent/>
        <HeroCarousel/>
        {props.children}
    </>
}
export default DefaultLayouts