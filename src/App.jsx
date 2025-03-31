import { useState } from 'react'
import TravelAgencyLanding from './components/TravelAgencyLanding'
// import Header from './components/about/DineshTravels/Header'
import './App.css'
import DineshTravels from './components/about/DineshTravels/DineshTravels'
import { CommitmentSection } from './components/about/CommitmentSection/CommitmentSection'
import Hero from './components/about/DineshTravels/Hero'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/dineshtravels" element={<TravelAgencyLanding />} />
        <Route path="/dineshtravels/about" element={<DineshTravels />} />
      </Routes>
      {/* <TravelAgencyLanding /> */}
      {/* <DineshTravels /> */}
      {/* <Header /> */}
      {/* <DineshTravels /> */}
    </>
  )
}

export default App
