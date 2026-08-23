import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import parisImg from './assets/Paris.JPG'
import berlinImg from './assets/Berlin.webp'
import Header from './components/header'
import TravelNotes from './components/travel_notes'

import './App.css'

const root = createRoot(document.getElementById('root'))

function App() {
  const travelNotes = [
    {
      place: 'Paris',
      image: parisImg,
      duration: '12 Jan, 2021 - 24 Jan, 2021',
      description: 'Cool place'
    },
    {
      place: 'Berlin',
      image: berlinImg,
      duration: '10 Aug, 2021 - 24 Aug, 2021',
      description: 'Fun'
    }
  ]

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
