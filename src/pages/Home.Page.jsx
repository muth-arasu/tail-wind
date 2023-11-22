import React from "react";
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCard.Components'


const Home = () => {
    return (
        <>
            <div className='container mx-auto px-4'>
                <h1 className="text-2xl font-bold text-gray my-3">The Best Of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
        </>
    )
}
export default Home;
