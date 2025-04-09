import TravelAgencyLanding from './components/TravelAgencyLanding'
import './App.css'
import DineshTravels from './components/about/DineshTravels/DineshTravels'
import { Route, Routes } from 'react-router-dom'
import Services from './components/Ourservices/Services'
import GalleryPage from '../src/components/Gallery/GalleryPage/GalleryPage'

function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<TravelAgencyLanding />} />
        <Route exact path="/about" element={<DineshTravels />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path="/gallery" element={<GalleryPage />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
