import React from 'react'
import './App.css'
import MainMap from './components/maps/MainMap'
import Navbar from './components/control/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Navbar />
      <MainMap />
    </>
  )
}

export default App
