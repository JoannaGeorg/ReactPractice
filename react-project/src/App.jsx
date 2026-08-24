import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header'
import TravelNotes from './components/travel_notes'
import travelNotes from './components/notes'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <TravelNotes
        travelNotes={travelNotes}
      />
    </>
  )
}

export default App
