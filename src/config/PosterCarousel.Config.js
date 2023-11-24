const PosterCarouselSettings ={
    infinity :false,
    speed:500,
    slidesToShow:5,
    slidesToScroll:4,
    intialSlide:0,
    responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToShow:5,
                slidesToScroll:4,
                infinite:true,
            }
        },
        {  breakpoint:768,  
            settings:{
                slidesToShow:3,
                slidesToScroll:1,
                initialSlide:2,
            
            }
        },
        {  breakpoint:480,  
            settings:{
                slidesToShow:3,
                slidesToScroll:1
               
            }
        },

    ]

}
 export default PosterCarouselSettings