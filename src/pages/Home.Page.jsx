import React from "react";

//components
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCard.Components'
import PosterSlider from "../PosterSlider/PosterSlider.Component";


//configs
import PremierImages from "../config/TempImages.Config";
import EntertainmentImages from "../config/EntertainmentCarouselSettings";
import EntertainmentEventImages from "../config/EntertainmentEventImages";





const Home = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="container mx-auto px-4 py-2">
                <h1 className="text-2xl font-bold text-gray my-3">Recommended movies</h1>
                    <PosterSlider images={PremierImages} title="Recommended movies" isDark={false} />
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
                        <PosterSlider images={PremierImages} title="Premiers" sub="Brand new reelased every friday" isDark={true} />
                    </div>
                </div>
                <div className="container mx-auto px-4 py-2">
                    <PosterSlider images={PremierImages} title="Online Streaming Events" isDark={false} />
                </div>
                <div className="container mx-auto px-4 py-2">
                    <PosterSlider images={PremierImages} title="Online Streaming Events" isDark={false} />
                </div>

            </div>
        </>
    )
}
export default Home;
