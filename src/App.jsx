import React from 'react'
import {Route,Routes} from 'react-router-dom'
//HOC
import DefaultHOC from './HOC/Default.HOC'
//Pages
import Home from './pages/Home.Page'





export default function App() {

  return (
   <>
   <DefaultHOC  path="/" exact component={Home} />
  
  </>
  )
}