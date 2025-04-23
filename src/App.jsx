import TravelAgencyLanding from './components/TravelAgencyLanding'
import './App.css'
import DineshTravels from './components/about/DineshTravels/DineshTravels'
import { Route, Routes } from 'react-router-dom'
import Services from './components/Ourservices/Services'
import GalleryPage from '../src/components/Gallery/GalleryPage/GalleryPage'

function App() {
  return (
    <>
      <div className="fixed bottom-10 right-10">
        <a href="https://wa.me/+919912345729" target='_blank'>
          <img className='w-15' src="Whatapp.png" alt="whatapplogo" />
        </a>
      </div>
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
