import React, { useEffect } from 'react'
import MovieNavbar from '../Components/Nav/MovieNav.Component'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
// api
import tmdb from '../Components/Api/tmdb'
//Context
import {MovieContext} from '../Context/movie.context'


const MovieLayout = (props) => {
  const {id}=useParams()
  const{movie,setMovie}=useContext(MovieContext)
  useEffect(()=>{
    const resMoviesDetails = async()=>{
      const getMovies = await tmdb.get(`/movie/${id}`)
      console.log(getMovies)
      setMovie(getMovies.data)
    } 
    resMoviesDetails()
  },[id])
  return (
    <>
      <MovieNavbar/>
      {props.children}
    </>
  )
}

export default MovieLayout
