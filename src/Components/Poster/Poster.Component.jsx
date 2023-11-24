import React from "react";


const Poster = (props) => {
    return (
        <>
            <div>
                <div className="flex flex-col items-start gap-2 px-2 h-32 md:h-96" >
                    <img src={props.src} alt={props.alt} className="w-full h-full rounded-xl md:rounded-md" />
                </div>
                <h1 className={` text-sm  md:text-xl font-bold ${props.isDark ? "text-white" : "text-gray-700"
                    }`}> {props.title}</h1>
                <p h1 className={`text-sm  ${props.isDark ? "text-white" : "text-gray"
                    }`} >{props.sub}</p>

            </div>
        </>
    )
}
export default Poster