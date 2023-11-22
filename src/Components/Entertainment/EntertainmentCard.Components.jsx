import React from 'react'
import Slider from 'react-slick'
const EntertainmentCard =(props)=>{
    console.log(props)
    return (
    <>
    <div className='w-full h-72  px-2 py-1 rounded-xl'>
        <img src={props.src} alt="entertainment image" className='w-full h-full rounded-xl' />
    </div>
    </>
)}



const EntertainmentCardSlider=()=>{
    const EntertainmentImages = [
        "https://www.scrolldroll.com/wp-content/uploads/2023/08/Maaveeran-Best-Tamil-Movies-of-2023.jpg",     
        "https://www.scrolldroll.com/wp-content/uploads/2023/08/Thunivu-Best-Tamil-Movies-of-2023-e1690892448966.jpg",     
        "https://curiosityhuman.com/wp-content/uploads/2017/12/Black-Panther-Upcoming-Superhero-Movies-2018-429x625.jpg",     
        "https://www.scrolldroll.com/wp-content/uploads/2023/08/Varisu-Best-Tamil-Movies-of-2023-e1690891743823.jpg",
        "https://i.pinimg.com/736x/70/ca/4f/70ca4f14079446ae6b74d2f912cfa4bb.jpg",     
        "https://www.scrolldroll.com/wp-content/uploads/2023/08/Yaathisai-Best-Tamil-Movies-in-2023.jpg",     
        "https://www.scrolldroll.com/wp-content/uploads/2023/08/Ponniyan-Selvan-2-Best-Tamil-Movies-in-2023.jpg",     
        "https://www.scrolldroll.com/wp-content/uploads/2023/08/Viduthalai-Part-1-Best-Tamil-Movies-of-2023-e1690881291296.jpg",     
    ];
    const settings ={
        infinity :false,
        autoply:false,
        slidesToShow:4,
        slidesToScroll:4,
        intialSlide:0,
        responsive:[
            {
                breakpoints:1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:2,
                    infinite:true,
                }
            },
            {  breakpoints:768,  
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:1
                }
            },
            {  breakpoints:480,  
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:1
                }
            },

        ]

    }
    return(
        <>
            
            <Slider {...settings}>
                {
                    EntertainmentImages.map((image)=>{
                    return(
                        <>
                            <EntertainmentCard src={image}/>
                        </>
                    )
                    })
                }
            </Slider>

            
           
        </>
    )
}
export default EntertainmentCardSlider