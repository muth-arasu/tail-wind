import React from 'react'
import NavComponent from '../Components/Nav/Nav.Component'
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.component'


const PlaysLayout =(props)=>{
    


    return<>
        <NavComponent/>
        <HeroCarousel/>
        {props.children}
    </>
}
export default PlaysLayout