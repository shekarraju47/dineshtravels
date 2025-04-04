import { useState } from 'react'
import TravelAgencyLanding from './components/TravelAgencyLanding'
import './App.css'
import DineshTravels from './components/about/DineshTravels/DineshTravels'
import { Route, Routes } from 'react-router-dom'
import Services from './components/Ourservices/Services'

function App() {
  return (
    <>
      <Routes>
        <Route path="/dineshtravels/" element={<TravelAgencyLanding />} />
        <Route path="/dineshtravels/about" element={<DineshTravels />} />
        <Route path='/dineshtravels/services' element={<Services />} />
      </Routes>
    </>
  )
}

export default App
