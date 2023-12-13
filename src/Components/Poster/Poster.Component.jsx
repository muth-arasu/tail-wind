import React from "react";
import { Link } from "react-router-dom";


const Poster = (props) => {
    return (
        <>
        <Link to={`/movie/${props.id}`}>
            <div className="">
                <div className="flex flex-col items-start gap-2 px-2 h-32 md:h-96 lg:h-80" >
                    <img src={`https://www.themoviedb.org/t/p/original${props.poster_path}`} alt={props.title} className="w-full h-full rounded-xl md:rounded-md" />
                </div>
                <h1 className={` text-sm  md:text-xl font-bold ${props.isDark ? "text-white" : "text-gray-700"
                    }`}> {props.original_title}</h1>
                <p h1 className={`text-sm  ${props.isDark ? "text-white" : "text-gray"
                    }`} >{props.title}</p>

            </div>
          </Link>
        </>
    )
}
export default Poster