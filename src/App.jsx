import React from 'react'
import {Route,Routes} from 'react-router-dom'
import axios from 'axios'



//HOC
import DefaultHOC from './HOC/Default.HOC'
//Pages
import Home from './pages/Home.Page'
import Movie from './pages/Movie.Page'
import MovieHOC from './HOC/Movie.HOC'
import Plays from './pages/Plays.page'

// Axios Default settings
// axios.defaults.baseURL="https://api.themoviedb.org/3"
// axios.defaults.params ={}
// axios.defaults.params["api_key"]=import.meta.env.VITE_APP_API_KEY;



export default function App() {

  return (
   <>
   <DefaultHOC  path="/" exact component={Home} />
   <MovieHOC  path="/movie/:id" exact component={Movie} />
   <DefaultHOC  path="/plays" exact component={Plays} />


  
  </>
  )
}