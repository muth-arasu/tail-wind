import React from 'react'
import {Route,Routes} from 'react-router-dom'
import DefaultHOC from './HOC/Default.HOC'
import Temp from './Components/temp'



export default function App() {
  return (
   <>
   <DefaultHOC  path="/" exact component={Temp} />
  
  </>
  )
}