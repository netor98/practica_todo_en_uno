import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import './index.css'
import MoviesPage from './modules/movies/MoviesPage.jsx'
import PlanetsPage from './modules/planets/PlanetsPage.jsx'
import AirshipsPage from './modules/airships/AirshipsPage.jsx'
import VehiclesPage from './modules/vehicles/VehiclesPage.jsx'
import SpeciesPage from './modules/species/SpeciesPage.jsx'
import CharactersPage from './modules/characters/CharactersPage.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<Navigate to="/movies" replace />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/planets' element={<PlanetsPage />} />
        <Route path='/airships' element={<AirshipsPage />} />
        <Route path='/vehicles' element={<VehiclesPage />} />
        <Route path='/species' element={<SpeciesPage />} />
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='*' element={<Navigate to="/movies" replace />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
