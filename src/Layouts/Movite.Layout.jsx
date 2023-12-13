import React from 'react'
import MovieNavbar from '../Components/Nav/MovieNav.Component'

const MovieLayout = (props) => {
  return (
    <>
      <MovieNavbar/>
      {props.children}
    </>
  )
}

export default MovieLayout
